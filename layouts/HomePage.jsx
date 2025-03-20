"use client";
import MotionSection from "@/components/MotionSection";

// Sections views
import Hero from "@/views/home/sections/Hero";
import Overview from "@/views/home/sections/Overview";
import OurProcess from "@/views/shared/OurProcess";
import Separator from "@/views/shared/Separator";
import Testimonials from "@/views/shared/Testimonials";
import ContactForm from "@/views/home/sections/ContactForm";
import OurServicesHome from "@/views/shared/OurServices";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <MotionSection>
        <Overview />
      </MotionSection>

      <MotionSection>
        <OurProcess />
      </MotionSection>

      <MotionSection delay={0.3}>
        <Separator />
      </MotionSection>

      <MotionSection>
        <OurServicesHome backgroundLines="true" />
      </MotionSection>

      <MotionSection>
        <Testimonials />
      </MotionSection>

      <MotionSection>
        <ContactForm />
      </MotionSection>
    </main>
  );
}
