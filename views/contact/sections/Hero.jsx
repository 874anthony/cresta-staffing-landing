"use client";
import NextLink from "next/link";

import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./Hero.module.scss";

export default function Hero() {
  const isMobile = useIsMobile(475);

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

        <form className={styles.contact__form}>
          <div className={styles.contact__formGroup}>
            <label htmlFor="fullName">Full name</label>
            <input type="text" id="fullName" name="fullName" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="companyName">Company name</label>
            <input type="text" id="companyName" name="companyName" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="message">Tell us how we can help</label>
            <textarea id="message" rows={2} name="message"></textarea>
          </div>

          <div className={styles.contact__submit}>
            <div className={styles.contact__terms}>
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">I agree to the Privacy Policy</label>
            </div>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
