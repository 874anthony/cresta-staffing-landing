import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h1 className={styles.hero__captionTitle}>Blog</h1>
        <h4 className={styles.hero__captionSubtitle}>
          Stay Ahead with Cresta&apos;s Construction Staffing Insights
        </h4>

        <p className={styles.hero__captionText}>
          Welcome to our blog, your go-to source for the latest in construction
          staffing. Gain a competitive edge with expert insights to attract top
          talent, streamline hiring, and maximize efficiency!
        </p>

        <p className={styles.hero__captionDescription}>
          Explore valuable insights that keep your workforce strong and your
          projects on track!
        </p>
      </div>

      <div className={styles.hero__images}>
        <img src={"/assets/blog/blog-hero.png"} alt="AEC Staffing Agency" />
      </div>
    </section>
  );
}
