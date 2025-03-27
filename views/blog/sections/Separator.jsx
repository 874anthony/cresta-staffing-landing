"use client";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./Separator.module.scss";

export default function Separator() {
  const isMobile = useIsMobile(475);

  return (
    <section className={styles.separator}>
      <h4 className={styles.separatorTitle}>Stay ahead</h4>
      <span className={styles.separatorText}>
        Subscribe for top construction insights and strategies!
      </span>

      <div className={styles.separatorCTA}>
        <div className={styles.contact__formGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className={styles.contact__formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <Button
          variant="secondary"
          size="large"
          style={{
            fontWeight: isMobile ? 400 : "500",
            fontSize: isMobile ? "0.8rem" : "1.125rem",
          }}
        >
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}
