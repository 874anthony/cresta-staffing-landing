"use client";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./FindJobSeparator.module.scss";

export default function FindJobSeparator() {
  const router = useRouter();
  const isMobile = useIsMobile(475);

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
          fontSize: isMobile ? "0.875rem" : "1.275rem",
        }}
        onClick={() => {
          router.push("/contact");
        }}
      >
        Let&apos;s get started
      </Button>
    </section>
  );
}
