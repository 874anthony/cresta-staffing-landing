"use client";
import useIsMobile from "@/hooks/useIsMobile";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

import Button from "@/components/Button";

import styles from "./SeparatorServices.module.scss";

export default function SeparatorServices() {
  const isMobile = useIsMobile(475);

  const smoothScroll = useSmoothScroll();
  const homeExpertConsultation = "home-expert-consultation";

  return (
    <section className={styles.cta__separator}>
      <h4 className={styles.cta__separatorTitle}>
        Take your project to the <span>next level</span> with our{" "}
        <span>construction professionals.</span>
      </h4>

      <Button
        variant="secondary"
        size="large"
        fontWeight="bold"
        style={{
          fontSize: isMobile ? "0.875rem" : "1.275rem",
        }}
        onClick={() => {
          smoothScroll(homeExpertConsultation);
        }}
      >
        Get Expert Consultation
      </Button>
    </section>
  );
}
