import Button from "@/components/Button";

import styles from "./FindJobSeparator.module.scss";

export default function FindJobSeparator() {
  return (
    <section className={styles.findJobSeparator}>
      <h4 className={styles.findJobSeparatorTitle}>
        Ready to build succes? <span>Cresta</span> makes it happen
      </h4>

      <p className={styles.findJobSeparatorText}>
        Join our team and reach your highest potential!
      </p>

      <Button
        variant="secondary"
        size="large"
        style={{
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        Let&apos;s get started
      </Button>
    </section>
  );
}
