"use client";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./Separator.module.scss";
import { LinkedinIcon } from "@/components/icons/socials/LinkedinIcon";
import { InstagramIcon } from "@/components/icons/socials/InstagramIcon";

export default function Separator() {
  const isMobile = useIsMobile(475);

  return (
    <section className={styles.separator}>
      <div className={styles.separatorSection}>
        <h4 className={styles.separatorTitle}>Cresta is here to help</h4>
        <p className={styles.separatorText}>
          For questions about our services, talent pool, or process, contact us.
        </p>

        <Button
          variant="secondary"
          size="large"
          style={{
            fontSize: isMobile ? "0.875rem" : "1.25rem",
          }}
        >
          office@crestastaffing.com
        </Button>
      </div>

      <div className={styles.separatorSection}>
        <h4 className={styles.separatorTitle}>Follow Cresta!</h4>
        <p className={styles.separatorText}>
          Join our community and stay up to date with our latest news.
        </p>

        <div className={styles.socials}>
          <a className={styles.socialsItem}>
            <LinkedinIcon />
          </a>
          <a className={styles.socialsItem}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
