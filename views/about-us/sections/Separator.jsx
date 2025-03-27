import Button from "@/components/Button";

import styles from "./Separator.module.scss";

export default function Separator() {
  return (
    <section className={styles.aboutSeparator}>
      <h4 className={styles.aboutSeparatorTitle}>Solve Your Challenges</h4>
      <span className={styles.aboutSeparatorText}>With expert consulting</span>

      <div className={styles.aboutSeparatorCTA}>
        <div className={styles.contact__formGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className={styles.contact__formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <Button variant="secondary" size="large">
          Book a consultation
        </Button>
      </div>
    </section>
  );
}
