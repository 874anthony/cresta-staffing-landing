"use client";
import MotionSection from "@/components/MotionSection";

import HeroService from "@/views/service/sections/Hero";
import OverviewService from "@/views/service/sections/Overview";
import SoftwareUsedService from "../SoftwareUsed";
import SeparatorChallengeService from "@/views/service/sections/SeparatorChallenge";
import OurServicesIndividual from "../OurServices";
import FAQ from "../FAQ";
import JobAlert from "../JobAlert";

export default function ServiceGeneric({
  title,
  description,
  heroImage,
  overviewItems,
  overviewImage,
  overviewDescription,
  extraTest,
}) {
  return (
    <main style={{ overflowX: "hidden" }}>
      <HeroService
        title={title}
        description={description}
        heroImage={heroImage}
        extraTest={extraTest}
      />

      <MotionSection>
        <OverviewService
          overviewItems={overviewItems}
          overviewImage={overviewImage}
          overviewDescription={overviewDescription}
        />
      </MotionSection>

      <MotionSection>
        <SoftwareUsedService />
      </MotionSection>

      <MotionSection delay={0.3}>
        <SeparatorChallengeService />
      </MotionSection>

      <MotionSection>
        <OurServicesIndividual backgroundColor="white" />
      </MotionSection>

      <MotionSection>
        <FAQ rounded="true" />
      </MotionSection>

      <MotionSection delay={0.3}>
        <JobAlert />
      </MotionSection>
    </main>
  );
}
