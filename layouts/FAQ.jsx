"use client";
import MotionSection from "@/components/MotionSection";

import FAQContainer from "@/views/faq/sections/FAQ";
import SeparatorFAQPage from "@/views/faq/sections/Separator";

import styles from "./Layout.module.scss";

export default function FAQPage() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <FAQContainer />

      <MotionSection delay={0.3}>
        <SeparatorFAQPage />
      </MotionSection>
    </main>
  );
}
