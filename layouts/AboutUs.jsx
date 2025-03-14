import HeroAbout from "@/views/about-us/sections/Hero";
import Features from "@/views/about-us/sections/Features";
import OurVisionMision from "@/views/about-us/sections/OurMisionVision";
import SeparatorAbout from "@/views/about-us/sections/Separator";

import styles from "./About.module.scss";

export default function AboutUsPage() {
  return (
    <main>
      <HeroAbout />

      <Features />

      <OurVisionMision />

      <section className={styles.ourTeam}>
        <p>To be done later.</p>
      </section>

      <SeparatorAbout />
    </main>
  );
}
