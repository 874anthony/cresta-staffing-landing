"use client";
import { Suspense, useEffect } from "react";
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

import styles from "./Layout.module.scss";

const testimonials = [
  {
    name: "Mario Pinzón",
    position: "Estimator",
    avatarImage: "/assets/jobs/testimonials/mario_pinzon_photo.jpg",
    text: "Working at Cresta has been a fantastic experience both professionally and personally. I've had the opportunity to grow and learn in an international work environment, while also having the support of a team always ready to assist in any situation. Additionally, the flexibility of working from home has greatly contributed to achieving a better work-life balance.",
  },
  {
    name: "Jesus Perez",
    position: "Fire Protection Engineer",
    avatarImage: "/assets/jobs/testimonials/jesus_perez_photo.jpg",
    text: "Working at Cresta has been an incredible experience that has significantly contributed to my career growth. Since joining the team, I have had the opportunity to face new challenges, learn from a group of highly skilled people, and improve my abilities in key areas. The work culture at Cresta has allowed me to develop as a professional, gain a broader perspective of my field, and strengthen my ability to make strategic decisions. Without a doubt, my time at Cresta has been fundamental to my evolution, and I am grateful for everything I have learned here.",
  },
  {
    name: "Sara Polo",
    position: "Architect Project Manager",
    avatarImage: "/assets/jobs/testimonials/sara_polo_photo.jpg",
    text: "From the very beginning, Cresta made the hiring process feel human and thoughtful, valuing my professional experience. Since joining, they have continuously supported me, listened to me, and followed my growth.orking with Cresta has been a truly rewarding experience where I feel valued and appreciated.",
  },
];

export default function FindJobPage() {
  const searchParams = useSearchParams();

  const scrollToSection = searchParams.get("scrollTo");

  useEffect(() => {
    document.title = "Find a Job - Cresta Staffing";

    // Smooth scroll to the section if it exists in the URL
    if (scrollToSection) {
      const section = document.getElementById(scrollToSection);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [scrollToSection]);

  return (
    <Suspense>
      <main className={styles.main} style={{ overflow: "hidden" }}>
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
    </Suspense>
  );
}
