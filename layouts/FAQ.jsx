"use client";
import MotionSection from "@/components/MotionSection";

import FAQContainer from "@/views/faq/sections/FAQ";
import SeparatorFAQPage from "@/views/faq/sections/Separator";

export default function FAQPage() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <FAQContainer />

      <MotionSection delay={0.3}>
        <SeparatorFAQPage />
      </MotionSection>
    </main>
  );
}
