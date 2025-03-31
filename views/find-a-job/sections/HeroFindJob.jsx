"use client";
import { useRouter } from "next/navigation";

import Button from "@/components/Button";

import styles from "./HeroFindJob.module.scss";

export default function HeroFindJob() {
  const router = useRouter();

  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>Find a Job</h4>

        <h1 className={styles.hero__captionTitle}>
          Find your <span>remote dream career</span>
        </h1>

        <p className={styles.hero__captionText}>
          Work remotely on the most innovative construction projects in the U.S.
        </p>

        <div className={styles.hero__captionCTA}>
          <Button
            variant="primary"
            size="large"
            onClick={() => router.push("/contact")}
          >
            Get Expert Consultation
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <img
          src={"/assets/jobs/image_find_a_job.png"}
          alt="AEC Staffing Agency"
        />
      </div>
    </section>
  );
}
