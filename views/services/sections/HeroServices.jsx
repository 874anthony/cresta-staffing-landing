import Button from "@/components/Button";

import styles from "./HeroServices.module.scss";

export default function HeroServices() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>Our Services</h4>

        <h1 className={styles.hero__captionTitle}>
          Top <span>experts,</span> Effortless <span>hiring</span>
        </h1>

        <p className={styles.hero__captionText}>
          No more wasted hours or misaligned hires. Cresta connects you with
          pre-vetted, top-tier construction professionals.
        </p>

        <div className={styles.hero__captionCTA}>
          <Button variant="primary" size="large">
            Get Expert Consultation
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <img
          src={"/assets/services/image_services_1.png"}
          alt="AEC Staffing Agency"
        />

        <img
          src={"/assets/services/image_services_2.png"}
          alt="AEC Staffing Agency"
        />
      </div>
    </section>
  );
}
