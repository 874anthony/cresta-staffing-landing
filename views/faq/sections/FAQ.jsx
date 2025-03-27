"use client";
import { useEffect, useState } from "react";

import { FaqIconClosed, FaqIconOpen } from "@/components/icons/faq/FaqIcons";
import { faqGeneralData } from "@/data/faqGeneral";

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

export default function FAQ() {
  const [faqType, setFaqType] = useState("client");

  // Track which section is selected; default to the first one
  const sectionKeys = Object.keys(faqGeneralData[faqType]);
  const [selectedSection, setSelectedSection] = useState(sectionKeys[0]);

  // Track which question is open; you can use null for closed or store an index/id.
  const [activeQuestions, setActiveQuestions] = useState([]);

  useEffect(() => {
    // Reset active questions when the faqType changes.

    const newSectionKeys = Object.keys(faqGeneralData[faqType]);

    setSelectedSection(newSectionKeys[0]);
    setActiveQuestions([]);
  }, [faqType]);

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

  if (!faqGeneralData[faqType][selectedSection]) {
    return (
      <section className={styles.loading}>
        <p className={styles.loadingText}>{`Loading ${faqType} FAQs...`}</p>

        <div className={styles.loadingSpinner}></div>
      </section>
    );
  }

  return (
    <section className={styles.faq}>
      {/* FAQ Type Selector */}
      <div className={styles.faq__typeSelector}>
        <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>

        <div className={styles.faq__typeSelectorButtons}>
          <button
            className={`
              ${styles.faq__typeSelectorButton}
              ${faqType === "client" ? styles.active : ""}`}
            onClick={() => setFaqType("client")}
          >
            Client FAQs
          </button>
          <button
            className={`
              ${styles.faq__typeSelectorButton}
              ${faqType === "jobseeker" ? styles.active : ""}`}
            onClick={() => setFaqType("jobseeker")}
          >
            Job seekers FAQs
          </button>
        </div>
      </div>

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
        {faqGeneralData[faqType][selectedSection].map((item, index) => {
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
                <h6 className={`${styles.faq__questionTitle}`}>
                  {item.question}
                </h6>

                <p className={styles.faq__questionText}>{item.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
