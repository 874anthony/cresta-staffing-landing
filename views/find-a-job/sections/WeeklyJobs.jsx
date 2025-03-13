import Button from "@/components/Button";

import styles from "./WeeklyJobs.module.scss";

export default function WeeklyJobs() {
  return (
    <section className={styles.weekly__jobs}>
      <h3 className={styles.weekly__jobsTitle}>Jobs of the week</h3>

      <p className={styles.weekly__subCaption}>
        Explore our offers and stay updated for more!
      </p>

      <div className={styles.weekly__jobsList}>
        <div className={styles.weekly__jobCard}>
          <h4 className={styles.weekly__jobCardTitle}>
            Full Stack Web Developer
          </h4>

          <span className={styles.weekly__jobCardSubtitle}>(SEO/SEM/UX)</span>
          <span className={styles.weekly__jobCardSubtitle}>|</span>
          <span className={styles.weekly__jobCardSubtitle}>
            Remote (Colombia)
          </span>

          <ul className={styles.weekly__jobCardList}>
            <li>
              A Bachelorʼs Degree in Software Engineering, Systems Engineering,
              or a related field.
            </li>
            <li>
              Proficiency in front-end technologies (HTML, CSS, JavaScript)
            </li>
            <li>
              Knowledge of CMS platforms such as WordPress, Webflow, or
              custom-built solutions.
            </li>
          </ul>

          <div className={styles.weekly__jobCardFooter}>
            <Button
              variant="secondary"
              style={{
                backgroundColor: "#fff",
                color: "#1863C0",
                fontWeight: "bold",
              }}
            >
              Job Description
            </Button>
            <Button
              variant="secondary"
              style={{
                fontWeight: "bold",
              }}
            >
              Apply
            </Button>
          </div>
        </div>

        <div className={styles.weekly__jobCard}>
          <h4 className={styles.weekly__jobCardTitle}>Senior Architect Lead</h4>

          <span className={styles.weekly__jobCardSubtitle}>
            Remote (Colombia)
          </span>

          <ul className={styles.weekly__jobCardList}>
            <li>
              A Bachelorʼs Degree in Software Engineering, Systems Engineering,
              or a related field.
            </li>
            <li>
              Proficiency in front-end technologies (HTML, CSS, JavaScript)
            </li>
            <li>
              Knowledge of CMS platforms such as WordPress, Webflow, or
              custom-built solutions.
            </li>
          </ul>

          <div className={styles.weekly__jobCardFooter}>
            <Button
              variant="secondary"
              style={{
                backgroundColor: "#fff",
                color: "#2E3191",
                fontWeight: "bold",
              }}
            >
              Job Description
            </Button>
            <Button
              variant="secondary"
              style={{
                fontWeight: "bold",
              }}
            >
              Apply
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
