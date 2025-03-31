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

        <a
          href="mailto:office@crestastaffing.com"
          style={{
            fontFamily: "'Inter', sans-serif",
            padding: "0.6rem 2.4rem",
            borderRadius: "9999px",
            fontSize: isMobile ? "0.875rem" : "1.25rem",
            fontWeight: "500",
            border: 0,
            cursor: "pointer",
            transition: "transform 0.3s ease",
            backgroundColor: "#ffc907",
            textDecoration: "none",
            color: "#2a3a42",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          office@crestastaffing.com
        </a>
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
