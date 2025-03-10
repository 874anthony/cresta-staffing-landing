import Hero from "@/views/sections/Hero";
import OurProcess from "@/views/sections/OurProcess";
import Overview from "@/views/sections/Overview";
import Separator from "@/views/sections/Separator";
import Testimonials from "@/views/sections/Testimonials";

import styles from "./Home.module.scss";
import Button from "@/components/Button";
import ContactForm from "@/views/sections/ContactForm";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <Overview />

      <OurProcess />

      <Separator />

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

      <Testimonials />

      <ContactForm />
    </main>
  );
}
