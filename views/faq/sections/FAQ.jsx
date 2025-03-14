import Button from "@/components/Button";

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

const ExpandableIcon = () => (
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
      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
    />
  </svg>
);

const faqCategories = [
  "About Cresta",
  "Working with CRESTA",
  "Hiring a remote team",
  "About Cresta Hiring",
  "Job Application",
  "Offer & Onboarding",
  "Interview & Feedback",
];

export default function FAQ() {
  return (
    <section className={styles.faq}>
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqText}>
        Learn more about our services, and the benefits we provide.
      </p>

      <div className={styles.faqList}>
        {faqCategories.map((category, index) => (
          <div
            className={`${styles.faq__card} ${
              index === 0 ? styles.active : ""
            }`}
            key={index}
          >
            <span className={styles.faq__cardTitle}>{category}</span>

            <ChevronRight />
          </div>
        ))}
      </div>

      <div className={styles.faq__questionsContainer}>
        <div className={styles.faq__question}>
          <ExpandableIcon />

          <div className={styles.faq__questionContent}>
            <h6 className={styles.faq__questionTitle}>
              What is a BPO company?
            </h6>

            <p className={styles.faq__questionText}>
              A BPO (Business Process Outsourcing) company is a firm that
              handles business operations and tasks for other companies. These
              tasks can include customer service, HR, accounting, IT support,
              and more. BPOs help businesses reduce costs and improve efficiency
              by outsourcing non-core functions to specialized service
              providers.
            </p>
          </div>
        </div>

        <div className={styles.faq__question}>
          <ExpandableIcon />

          <div className={styles.faq__questionContent}>
            <h6 className={styles.faq__questionTitle}>Why choose CRESTA?</h6>
          </div>
        </div>
      </div>
    </section>
  );
}
