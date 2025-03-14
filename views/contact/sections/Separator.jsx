import Button from "@/components/Button";

import styles from "./Separator.module.scss";

export default function Separator() {
  return (
    <section className={styles.separator}>
      <div className={styles.separatorSection}>
        <h4 className={styles.separatorTitle}>Cresta is here to help</h4>
        <p className={styles.separatorText}>
          For questions about our services, talent pool, or process, contact us.
        </p>

        <Button variant="secondary" size="large">
          office@crestastaffing.com
        </Button>
      </div>

      <div className={styles.separatorSection}>
        <h4 className={styles.separatorTitle}>Follow Cresta!</h4>
        <p className={styles.separatorText}>
          Join our community and stay up to date with our latest news.
        </p>

        <div className={styles.socials}>
          <span className={styles.socialsItem}>LinkedIn</span>
          <span className={styles.socialsItem}>Instagram</span>
        </div>
      </div>
    </section>
  );
}
