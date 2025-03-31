"use client";
import MotionSection from "@/components/MotionSection";

import HeroAbout from "@/views/about-us/sections/Hero";
import Features from "@/views/about-us/sections/Features";
import OurVisionMision from "@/views/about-us/sections/OurMisionVision";
import OurTeam from "@/views/about-us/sections/OurTeam";
// import SeparatorAbout from "@/views/about-us/sections/Separator";
import Separator from "@/views/shared/Separator";

import styles from "./Layout.module.scss";

export default function AboutUsPage() {
  return (
    <main className={styles.main} id style={{ overflow: "hidden" }}>
      <HeroAbout />

      <MotionSection>
        <Features />
      </MotionSection>

      <MotionSection>
        <OurVisionMision />
      </MotionSection>

      <MotionSection>
        <OurTeam />
      </MotionSection>

      <MotionSection delay={0.3}>
        {/* <SeparatorAbout /> */}
        <Separator />
      </MotionSection>
    </main>
  );
}
