import Hero from "@/views/home/sections/Hero";
import OurProcess from "@/views/shared/OurProcess";
import Overview from "@/views/home/sections/Overview";
import Separator from "@/views/shared/Separator";
import Testimonials from "@/views/shared/Testimonials";
import ContactForm from "@/views/home/sections/ContactForm";
import OurServicesHome from "@/views/home/sections/OurServices";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Overview />

      <OurProcess />

      <Separator />

      <OurServicesHome />

      <Testimonials />

      <ContactForm />
    </main>
  );
}
