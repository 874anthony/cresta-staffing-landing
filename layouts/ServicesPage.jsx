"use client";
import MotionSection from "@/components/MotionSection";

import HeroServices from "@/views/services/sections/HeroServices";
import OurServicesServices from "@/views/shared/OurServices";
import OurProcess from "@/views/shared/OurProcess";
import Separator from "@/views/shared/Separator";
import SoftwareUsed from "@/views/shared/SoftwareUsed";
import Benefits from "@/views/services/sections/Benefits";
import SeparatorServices from "@/views/services/sections/SeparatorServices";
import Testimonials from "@/views/shared/Testimonials";
import FAQ from "@/views/shared/FAQ";

export default function ServicesPage() {
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

  return (
    <main style={{ overflowX: "hidden" }}>
      <HeroServices />

      <MotionSection>
        <OurServicesServices
          title="Our Expertise"
          description="Gain access to elite remote engineers and architects without the time-consuming search."
          mobileCorners="true"
        />
      </MotionSection>

      <MotionSection>
        <OurProcess />
      </MotionSection>

      <MotionSection delay={0.3}>
        <Separator />
      </MotionSection>

      <MotionSection>
        <SoftwareUsed />
      </MotionSection>

      <MotionSection>
        <Benefits />
      </MotionSection>

      <MotionSection delay={0.3}>
        <SeparatorServices />
      </MotionSection>

      <MotionSection>
        <Testimonials
          title="Hear from our clients"
          testimonials={testimonials}
        />
      </MotionSection>

      <MotionSection>
        <FAQ />
      </MotionSection>
    </main>
  );
}
