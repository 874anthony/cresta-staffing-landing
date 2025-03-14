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

export default function FAQ({ bgColor = "gray", rounded = false }) {
  return (
    <section
      className={`${bgColor === "gray" ? styles.faqGray : styles.faq}
      ${rounded ? styles.faqRounded : ""}`}
    >
      <h3 className={styles.faqTitle}>Frequently Asked Questions</h3>
      <p className={styles.faqText}>
        Learn more about our services, and the benefits we provide.
      </p>

      <div className={styles.faqList}>
        <div className={styles.faq__card}>
          <span className={styles.faq__cardTitle}>About Cresta</span>

          <ChevronRight />
        </div>

        <div className={styles.faq__card}>
          <span className={styles.faq__cardTitle}>Working with CRESTA</span>

          <ChevronRight />
        </div>

        <div className={styles.faq__card}>
          <span className={styles.faq__cardTitle}>Hiring a remote team</span>

          <ChevronRight />
        </div>
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

            {/* <p className={styles.faq__questionText}>
            A BPO (Business Process Outsourcing) company is a firm that
            handles business operations and tasks for other companies. These
            tasks can include customer service, HR, accounting, IT support,
            and more. BPOs help businesses reduce costs and improve
            efficiency by outsourcing non-core functions to specialized
            service providers.
          </p> */}
          </div>
        </div>
      </div>

      <div className={styles.faq__CTA}>
        <span className={styles.faq__CTAText}>Got any more questions?</span>

        <Button variant="secondary">Get in touch</Button>
      </div>
    </section>
  );
}
