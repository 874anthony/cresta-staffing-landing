import Hero from "@/views/home/sections/Hero";
import OurProcess from "@/views/shared/OurProcess";
import Overview from "@/views/home/sections/Overview";
import Separator from "@/views/shared/Separator";
import Testimonials from "@/views/shared/Testimonials";
import ContactForm from "@/views/home/sections/ContactForm";

import styles from "./Home.module.scss";
import Button from "@/components/Button";

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
