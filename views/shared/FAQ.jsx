"use client";
import { useState } from "react";

import Button from "@/components/Button";
import { FaqIconClosed, FaqIconOpen } from "@/components/icons/faq/FaqIcons";
import faqData from "@/data/faq";
import styles from "./FAQ.module.scss";

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function FAQ({ bgColor = "gray", rounded = false }) {
  // Track which section is selected; default to the first one
  const sectionKeys = Object.keys(faqData);
  const [selectedSection, setSelectedSection] = useState(sectionKeys[0]);

  // Track which question is open; you can use null for closed or store an index/id.
  const [activeQuestions, setActiveQuestions] = useState([]);

  // Change section and close any open question.
  const handleSectionClick = (section) => {
    setSelectedSection(section);
    setActiveQuestions([]); // reset active questions when section changes
  };

  // Toggle open/close state for a question.
  const toggleQuestion = (index) => {
    setActiveQuestions((prevActive) =>
      prevActive.includes(index)
        ? prevActive.filter((i) => i !== index)
        : [...prevActive, index]
    );
  };

  return (
    <section
      className={`${bgColor === "gray" ? styles.faqGray : styles.faq}
      ${rounded ? styles.faqRounded : ""}`}
    >
      <img
        src="/assets/shared/faq/faq_icon.png"
        alt="FAQ Icon"
        className={styles.faqIcon}
      />

      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqText}>
        Learn more about our services, and the benefits we provide.
      </p>

      {/* FAQ Section List */}
      <div className={styles.faqList}>
        {sectionKeys.map((section) => (
          <div
            key={section}
            className={`
              ${styles.faq__card}
              ${selectedSection === section ? styles.active : ""}`}
            onClick={() => handleSectionClick(section)}
          >
            <span className={styles.faq__cardTitle}>{section}</span>
            <ChevronRight />
          </div>
        ))}
      </div>

      {/* Questions Container */}
      <div className={styles.faq__questionsContainer}>
        {faqData[selectedSection].map((item, index) => {
          const isActive = activeQuestions.includes(index);

          return (
            <div
              key={index}
              className={`${styles.faq__question} ${
                isActive ? styles.active : ""
              }`}
              onClick={() => toggleQuestion(index)}
            >
              {isActive ? <FaqIconClosed /> : <FaqIconOpen />}
              <div className={styles.faq__questionContent}>
                <h6
                  className={`${styles.faq__questionTitle} ${
                    isActive ? styles.activeTitle : ""
                  }`}
                >
                  {item.question}
                </h6>
                <p className={styles.faq__questionText}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.faq__CTA}>
        <span className={styles.faq__CTAText}>Got any more questions?</span>

        <Button variant="secondary">Get in touch</Button>
      </div>
    </section>
  );
}
