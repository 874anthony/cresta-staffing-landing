import HeroFindJob from "@/views/find-a-job/sections/HeroFindJob";
import ApplicationProcess from "@/views/find-a-job/sections/ApplicationProcess";
import JobAlert from "@/views/find-a-job/sections/JobAlert";
import BenefitsJob from "@/views/find-a-job/sections/BenefitsJob";
import WeeklyJobs from "@/views/find-a-job/sections/WeeklyJobs";
import Testimonials from "@/views/shared/Testimonials";
import FAQ from "@/views/shared/FAQ";
import FindJobSeparator from "@/views/find-a-job/sections/FindJobSeparator";

import Button from "@/components/Button";

import styles from "./FindJob.module.scss";

export default function FindJobPage() {
  return (
    <main>
      <HeroFindJob />

      <ApplicationProcess />

      <section className={styles.our__services}>
        <h3 className={styles.our__servicesTitle}>
          What&apos;s your professional focus?
        </h3>
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

      <JobAlert />

      <BenefitsJob />

      <WeeklyJobs />

      <Testimonials />

      <FAQ />

      <FindJobSeparator />
    </main>
  );
}
