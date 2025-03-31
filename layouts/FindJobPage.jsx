"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import MotionSection from "@/components/MotionSection";

import HeroFindJob from "@/views/find-a-job/sections/HeroFindJob";
import ApplicationProcess from "@/views/find-a-job/sections/ApplicationProcess";
import OurServicesJob from "@/views/shared/OurServices";
import Separator from "@/views/shared/Separator";
// import JobAlert from "@/views/shared/JobAlert";
import BenefitsJob from "@/views/find-a-job/sections/BenefitsJob";
import WeeklyJobs from "@/views/find-a-job/sections/WeeklyJobs";
import Testimonials from "@/views/shared/Testimonials";
import FAQ from "@/views/shared/FAQ";
import FindJobSeparator from "@/views/find-a-job/sections/FindJobSeparator";

const testimonials = [
  {
    name: "Jose Patiño",
    position: "Recruitment Coordinator",
    avatarImage: "/assets/home/testimonials/team_1.jpg",
    text: "We were in a bind—our lead structural engineer resigned mid-project, and deadlines were looming. Cresta stepped in, understood our needs, and within days, we had a top-tier remote engineer onboard. Not only did we avoid costly delays, but we also finished ahead of schedule. Cresta made it effortless!",
  },
  {
    name: "Sara Correa",
    position: "Recruitment Coordinator",
    avatarImage: "/assets/home/testimonials/team_1.jpg",
    text: "When we won a big commercial project, we needed experienced architects fast. Our internal hiring process would have taken months, but Cresta provided thoroughly screened candidates within a week. Thanks to them, we hit the ground running without missing a beat!",
  },
  {
    name: "Jose Patiño",
    position: "Recruitment Coordinator",
    avatarImage: "/assets/home/testimonials/team_1.jpg",
    text: "As a growing company, we didn’t have time to sift through hundreds of resumes or conduct endless interviews. Cresta handled it all—within days, they matched us with a skilled Project Manager architect who integrated seamlessly into our team. Hiring has never been this easy!",
  },
];

export default function FindJobPage() {
  const searchParams = useSearchParams();

  const scrollToSection = searchParams.get("scrollTo");

  useEffect(() => {
    // Smooth scroll to the section if it exists in the URL
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToSection]);

  return (
    <main style={{ overflow: "hidden" }}>
      <HeroFindJob />

      <MotionSection>
        <ApplicationProcess />
      </MotionSection>

      <MotionSection>
        <OurServicesJob
          title="Whatʼs your professional focus?"
          description="Your skills. The right job. Letʼs construct your success together!"
          subCaption="Professional services"
          backgroundColor="white"
        />
      </MotionSection>

      <MotionSection delay={0.3}>
        {/* <JobAlert roundedTopCorner="true" /> */}
        <Separator />
      </MotionSection>

      <MotionSection>
        <BenefitsJob />
      </MotionSection>

      <MotionSection>
        <WeeklyJobs />
      </MotionSection>

      <MotionSection>
        <Testimonials
          title="Voices from our team"
          testimonials={testimonials}
        />
      </MotionSection>

      <MotionSection>
        <FAQ />
      </MotionSection>

      <MotionSection delay={0.3}>
        <FindJobSeparator />
      </MotionSection>
    </main>
  );
}
