import Button from "@/components/Button";

import styles from "./Hero.module.scss";

export default function Hero({ title, description, heroImage }) {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>Our Services</h4>

        <h1 className={styles.hero__captionTitle}>{title}</h1>

        <p className={styles.hero__captionText}>{description}</p>

        <div className={styles.hero__captionCTA}>
          <Button variant="primary" size="large">
            Get Expert Consultation
          </Button>

          <Button variant="secondary" size="large">
            Find a job
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <img src={heroImage} alt={`${title} service`} />
      </div>
    </section>
  );
}
