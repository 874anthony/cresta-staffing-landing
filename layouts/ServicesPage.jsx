import HeroServices from "@/views/services/sections/HeroServices";
import OurServicesServices from "@/views/shared/OurServices";
import OurProcess from "@/views/shared/OurProcess";
import Separator from "@/views/shared/Separator";
import SoftwareUsed from "@/views/services/sections/SoftwareUsed";
import Benefits from "@/views/services/sections/Benefits";
import SeparatorServices from "@/views/services/sections/SeparatorServices";
import Testimonials from "@/views/shared/Testimonials";
import FAQ from "@/views/shared/FAQ";

export default function ServicesPage() {
  return (
    <main>
      <HeroServices />

      <OurServicesServices
        title="Our Expertise"
        description="Gain access to elite remote engineers and architects without the time-consuming search."
      />

      <OurProcess />

      <Separator />

      <SoftwareUsed />

      <Benefits />

      <SeparatorServices />

      <Testimonials title="Hear from our clients" />

      <FAQ />
    </main>
  );
}
