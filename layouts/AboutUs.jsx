import HeroAbout from "@/views/about-us/sections/Hero";
import Features from "@/views/about-us/sections/Features";
import OurVisionMision from "@/views/about-us/sections/OurMisionVision";
import OurTeam from "@/views/about-us/sections/OurTeam";
import SeparatorAbout from "@/views/about-us/sections/Separator";

export default function AboutUsPage() {
  return (
    <main>
      <HeroAbout />

      <Features />

      <OurVisionMision />

      <OurTeam />

      <SeparatorAbout />
    </main>
  );
}
