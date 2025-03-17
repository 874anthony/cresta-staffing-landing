import Button from "@/components/Button";

import styles from "./Overview.module.scss";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    viewBox="0 0 24 24"
    fill="rgba(24, 99, 194, 255)"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Overview() {
  return (
    <section className={styles.overview}>
      <h2 className={styles.overview__title}>Find your perfect match, fast.</h2>

      <div className={styles.overview__checklist}>
        <div className={styles.overview__checklistItem}>
          <CheckIcon />
          <p>Access to Specialized Talent</p>
        </div>

        <div className={styles.overview__checklistItem}>
          <CheckIcon />
          <p>Overall Time and Cost Savings</p>
        </div>

        <div className={styles.overview__checklistItem}>
          <CheckIcon />
          <p>We work in your same time zone</p>
        </div>

        <div className={styles.overview__checklistItem}>
          <CheckIcon />
          <p>Enhanced Flexibility and Scalability</p>
        </div>
      </div>

      <div className={styles.overview__cta}>
        <div className={styles.overview__images}>
          <img src={"/assets/home/overview/overview.png"} alt="Slide 2" />
        </div>

        <div className={styles.overview__caption}>
          <h3 className={styles.overview__captionTitle}>
            Stop wasting time on hiring
          </h3>

          <p className={styles.overview__captionText}>
            <span>
              Why limit your search when the most skilled professionals are just
              a click away?{" "}
            </span>{" "}
            From architects and engineers to construction professionals, we
            bridge the gap between your business and elite remote talent,
            helping you scale, cut costs, and boost efficiency.
          </p>

          <Button
            variant="secondary"
            size="large"
            fontWeight="bold"
            style={{
              marginTop: "2rem",
            }}
          >
            Get Expert Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
