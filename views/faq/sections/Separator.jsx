"use client";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./Separator.module.scss";

export default function Separator() {
  const isMobile = useIsMobile(475);

  return (
    <section className={styles.separator}>
      <h4 className={styles.separatorTitle}>Get in touch with us today</h4>
      <p className={styles.separatorText}>
        Have questions that weren&apos;t answered here? Feel free to email to{" "}
        <span>office@crestastaffing.com</span> or get a{" "}
        <span>free consultation here.</span>
      </p>

      <Button
        variant="secondary"
        size="large"
        style={{
          fontWeight: isMobile ? "500" : "bold",
          fontSize: isMobile ? ".875rem" : "1.125rem",
        }}
      >
        Get Expert Consultation
      </Button>
    </section>
  );
}
