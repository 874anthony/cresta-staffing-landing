"use client";
import MotionSection from "@/components/MotionSection";

import HeroAbout from "@/views/contact/sections/Hero";
import SeparatorAbout from "@/views/contact/sections/Separator";

import styles from "./Layout.module.scss";

export default function ContactPage() {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
      <HeroAbout />

      <MotionSection delay={0.3}>
        <SeparatorAbout />
      </MotionSection>
    </main>
  );
}
