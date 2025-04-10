"use client";
import { useState, useRef } from "react";
import NextLink from "next/link";

import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  const isMobile = useIsMobile(475);

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [popupVisible, setPopupVisible] = useState(false);
  const formRef = useRef(null);

  // Regular expression for a valid email address.
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setTermsAccepted(checked);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Clear the form and reset the state variables
  const resetForm = () => {
    setFormData({
      fullName: "",
      companyName: "",
      phone: "",
      email: "",
      message: "",
    });
    setTermsAccepted(false);
    // Reset native form inputs if needed
    formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Trigger the native HTML validation
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    // Check the email with our custom validation
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Please enter a valid email address.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3000);
      return;
    } else {
      setErrorMessage("");
    }

    try {
      // Proceed with your fetch request
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        resetForm();

        // Show the popup notification
        setPopupVisible(true);

        // Hide popup automatically after 3 seconds
        setTimeout(() => setPopupVisible(false), 3000);
      } else {
        console.error("Error uploading file.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h1 className={styles.hero__captionTitle}>
          Stronger <span>teams,</span> smarter <span>builds</span>
        </h1>

        <p className={styles.hero__captionText}>
          Enjoy a stress-free hiring experience with <span>Cresta</span>{" "}
          handling your construction staffing needs.
        </p>

        <Button
          variant="primary"
          size="large"
          style={{
            marginBlock: isMobile ? "1rem" : "1.6rem",
            alignSelf: isMobile ? "center" : "flex-start",
            fontSize: isMobile ? ".875rem" : "1rem",
          }}
          onClick={() => {
            const inputFullname = document.getElementById("fullName");
            inputFullname?.focus();
          }}
        >
          Solve challenges now
        </Button>

        <div className={styles.hero__captionContact}>
          <p className={styles.hero__captionContactText}>
            Are you a skilled professional interested in joining Cresta Team?
          </p>
          <p className={styles.hero__captionContactText}>
            To apply for job opportunities,{" "}
            <NextLink
              className={styles.hero__captionContactLink}
              href="/find-a-job?scrollTo=weekly-jobs"
            >
              click here.
            </NextLink>
          </p>
        </div>
      </div>

      <div className={styles.contact__container}>
        <div className={styles.contact__text}>
          <h5 className={styles.contact__title}>Get in touch with us</h5>
          <p className={styles.contact__description}>
            Our dedicated team is here to provide you with the best service and
            support.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className={styles.contact__form}
        >
          <div className={styles.contact__formGroup}>
            <label htmlFor="fullName">Full name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="companyName">Company name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="message">Tell us how we can help</label>
            <textarea
              id="message"
              rows={2}
              name="message"
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className={styles.contact__submit}>
            <div className={styles.contact__terms}>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                onChange={handleChange}
              />
              <label htmlFor="terms">I agree to the Privacy Policy</label>
            </div>

            <Button variant="secondary" type="submit" disabled={!termsAccepted}>
              Submit
            </Button>
          </div>
        </form>
      </div>

      {/* Popup Notification */}
      {popupVisible && (
        <div className={`${styles.popup} ${errorMessage ? styles.error : ""}`}>
          <p>
            {errorMessage
              ? errorMessage
              : "Form submitted successfully! Our team will be in touch."}
          </p>
        </div>
      )}
    </section>
  );
}
