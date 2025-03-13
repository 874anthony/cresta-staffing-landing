import styles from "./BenefitsJob.module.scss";

export default function BenefitsJob() {
  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.benefits__titleContainer}>
        <span className={styles.benefits__subCaption}>
          Why do top professionals choose Cresta?
        </span>

        <h2 className={styles.benefits__captionTitle}>
          Benefits of working with Cresta
        </h2>
        <p className={styles.benefits__captionText}>
          Connecting your talent to the perfect career destination!
        </p>
      </div>

      <div className={styles.benefits__list}>
        <div className={styles.benefits__listItem}>
          <img
            className={styles.benefits__itemImage}
            src="/assets/jobs/find_job_ilustration_1.png"
            alt="benefits_1"
          />

          <div className={styles.benefits__itemContent}>
            <h4 className={styles.benefits__itemTitle}>The world is hiring</h4>
            <p className={styles.benefits__itemText}>
              Work on cutting-edge projects with global impact. We connect top
              talent with incredible opportunities worldwide. Your dream
              international career starts here!
            </p>
          </div>
        </div>

        <div className={styles.benefits__listItem}>
          <img
            className={styles.benefits__itemImage}
            src="/assets/jobs/find_job_ilustration_2.png"
            alt="benefits_2"
          />

          <div className={styles.benefits__itemContent}>
            <h4 className={styles.benefits__itemTitle}>
              Get paid what you're worth
            </h4>
            <p className={styles.benefits__itemText}>
              Your skills deserve top pay! We connect you with remote
              opportunities offering competitive salaries in USD and access to
              high-value international clients.
            </p>
          </div>
        </div>

        <div className={styles.benefits__listItem}>
          <img
            className={styles.benefits__itemImage}
            src="/assets/jobs/find_job_ilustration_3.png"
            alt="benefits_3"
          />

          <div className={styles.benefits__itemContent}>
            <h4 className={styles.benefits__itemTitle}>
              Work anywhere, grow everywhere
            </h4>
            <p className={styles.benefits__itemText}>
              Enjoy ultimate flexibility with remote opportunities, work from
              home or anywhere you choose! Achieve work-life balance and take
              control of your career. Your job, your rules!
            </p>
          </div>
        </div>

        <div className={styles.benefits__listItem}>
          <img
            className={styles.benefits__itemImage}
            src="/assets/jobs/find_job_ilustration_4.png"
            alt="benefits_4"
          />

          <div className={styles.benefits__itemContent}>
            <h4 className={styles.benefits__itemTitle}>Grow, learn, succeed</h4>
            <p className={styles.benefits__itemText}>
              Cresta is dedicated to your success! We offer continuous learning
              and development programs to help you grow, master new skills, and
              reach your full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
