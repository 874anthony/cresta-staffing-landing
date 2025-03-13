import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>About Us</h4>

        <h1 className={styles.hero__captionTitle}>
          Our <span>Story</span>
        </h1>

        <p className={styles.hero__captionText}>
          At Cresta, we deliver innovative architectural and engineering
          solutions. Our expert team ensures quality and precision from concept
          to completion.
        </p>

        <p className={styles.hero__captionDescription}>
          Discover our commitment to innovation and client satisfaction.
        </p>
      </div>

      <div className={styles.hero__images}>
        <img
          src={"/assets/about/image_about_us_1.png"}
          alt="AEC Staffing Agency"
        />

        <img
          src={"/assets/about/image_about_us_2.png"}
          alt="AEC Staffing Agency"
        />
      </div>
    </section>
  );
}
