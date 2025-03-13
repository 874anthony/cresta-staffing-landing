import HeroServices from "@/views/services/sections/HeroServices";
import OurProcess from "@/views/shared/OurProcess";
import Separator from "@/views/shared/Separator";
import SoftwareUsed from "@/views/services/sections/SoftwareUsed";
import Benefits from "@/views/services/sections/Benefits";
import SeparatorServices from "@/views/services/sections/SeparatorServices";
import Testimonials from "@/views/shared/Testimonials";

import styles from "./Services.module.scss";
import Button from "@/components/Button";
import FAQ from "@/views/shared/FAQ";

export default function ServicesPage() {
  return (
    <main>
      <HeroServices />

      <section className={styles.our__services}>
        <h3 className={styles.our__servicesTitle}>Our professional services</h3>
        <p className={styles.our__servicesText}>
          Expert solutions tailored for you
        </p>

        <div className={styles.our__servicesList}>
          <div className={styles.service__card}>
            <div className={styles.service__cardContent}>
              <h4 className={styles.service__cardTitle}>Consulting</h4>
              <p className={styles.service__cardText}>
                Our consulting services help you navigate the complexities of
                business.
              </p>

              <Button variant="secondary">Learn more</Button>
            </div>
          </div>
        </div>
      </section>

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
