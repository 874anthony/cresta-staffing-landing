"use client";
import { useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./Hero.module.scss";

export default function Hero({ title, description, heroImage, extraTest }) {
  const router = useRouter();
  const isMobile = useIsMobile(475);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>Our Services</h4>

        <h1 className={styles.hero__captionTitle}>{title}</h1>

        <p className={styles.hero__captionText}>{description}</p>

        {extraTest && <p className={styles.hero__captionExtra}>{extraTest}</p>}

        <div className={styles.hero__captionCTA}>
          <Button
            variant="primary"
            size="large"
            style={{
              fontSize: isMobile ? "0.875rem" : "1.275rem",
              padding: isMobile ? "0.6rem 1.4rem" : "0.6rem 2.4rem",
            }}
            onClick={() => router.push("/contact")}
          >
            Get Expert Consultation
          </Button>

          <Button
            variant="secondary"
            size="large"
            style={{
              fontSize: isMobile ? "0.875rem" : "1.275rem",
              padding: isMobile ? "0.6rem 1.4rem" : "0.6rem 2.4rem",
            }}
            onClick={() => router.push("/find-a-job")}
          >
            Find a job
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <img src={heroImage} alt={`${title} service`} />
      </div>
    </section>
  );
}
