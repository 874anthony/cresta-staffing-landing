"use client";
import MotionSection from "@/components/MotionSection";

import HeroService from "@/views/service/sections/Hero";
import OverviewService from "@/views/service/sections/Overview";
import SoftwareUsedService from "../SoftwareUsed";
// import SeparatorChallengeService from "@/views/service/sections/SeparatorChallenge";
import OurServicesIndividual from "../OurServices";
import FAQ from "../FAQ";
// import JobAlert from "../JobAlert";
import Separator from "../Separator";
import FindJobSeparator from "@/views/find-a-job/sections/FindJobSeparator";

import styles from "@/layouts/Layout.module.scss";

export default function ServiceGeneric({
  title,
  description,
  heroImage,
  overviewItems,
  overviewImage,
  overviewDescription,
  servicesImages,
  extraTest,
}) {
  return (
    <main className={styles.main} style={{ overflow: "hidden" }}>
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
        <SoftwareUsedService servicesImages={servicesImages} />
      </MotionSection>

      <MotionSection delay={0.3}>
        {/* <SeparatorChallengeService /> */}
        <Separator />
      </MotionSection>

      <MotionSection>
        <OurServicesIndividual backgroundColor="white" />
      </MotionSection>

      <MotionSection>
        <FAQ rounded="true" />
      </MotionSection>

      <MotionSection delay={0.3}>
        {/* <JobAlert /> */}
        <FindJobSeparator />
      </MotionSection>
    </main>
  );
}
