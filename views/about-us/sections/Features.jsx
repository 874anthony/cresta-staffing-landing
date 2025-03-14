import styles from "./Features.module.scss";

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.featureContent}>
        <img
          className={styles.featureIcon}
          src="/assets/about/features/icon_about_1_blue.png"
          alt="icon"
        />

        <span className={styles.featureText}>
          Building stronger connections
        </span>
      </div>

      <div className={styles.featureContent}>
        <img
          className={styles.featureIcon}
          src="/assets/about/features/icon_about_2_blue.png"
          alt="icon"
        />

        <span className={styles.featureText}>
          Workforce solutions that drive success
        </span>
      </div>

      <div className={styles.featureContent}>
        <img
          className={styles.featureIcon}
          src="/assets/about/features/icon_about_3_blue.png"
          alt="icon"
        />

        <span className={styles.featureText}>
          Evolving with industry trends to stay ahead
        </span>
      </div>

      <div className={styles.featureContent}>
        <img
          className={styles.featureIcon}
          src="/assets/about/features/icon_about_4_blue.png"
          alt="icon"
        />

        <span className={styles.featureText}>Innovation meets reliability</span>
      </div>
    </section>
  );
}
