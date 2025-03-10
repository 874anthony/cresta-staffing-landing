import styles from "./Benefits.module.scss";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <span className={styles.benefits__subCaption}>Benefits</span>
      <h3 className={styles.benefits__captionTitle}>Why choose Cresta?</h3>

      <div className={styles.benefits__list}>
        <div className={styles.benefits__item}>
          <CheckIcon />

          <div className={styles.benefits__text}>
            <h5 className={styles.benefits__itemTitle}>
              Experienced talent, zero hassle
            </h5>

            <p className={styles.benefits__itemText}>
              Instantly access top professionals without the hiring headaches.
            </p>
          </div>
        </div>

        <div className={styles.benefits__item}>
          <CheckIcon />

          <div className={styles.benefits__text}>
            <h5 className={styles.benefits__itemTitle}>
              Perfect match, every time
            </h5>

            <p className={styles.benefits__itemText}>
              We ensure the right skills, experience, and cultural fit
            </p>
          </div>
        </div>

        <div className={styles.benefits__item}>
          <CheckIcon />

          <div className={styles.benefits__text}>
            <h5 className={styles.benefits__itemTitle}>
              Seamless onboarding & support
            </h5>

            <p className={styles.benefits__itemText}>
              From kickoff to collaboration, we guide every step.
            </p>
          </div>
        </div>

        <div className={styles.benefits__item}>
          <CheckIcon />

          <div className={styles.benefits__text}>
            <h5 className={styles.benefits__itemTitle}>
              Cost-effective, scalable hiring
            </h5>

            <p className={styles.benefits__itemText}>
              Save time and money while growing your business efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
