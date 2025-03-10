import styles from "./Home.module.scss";

export default function HomePage() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.hero__caption}>
          <h4 className={styles.hero__captionSubtitle}>
            AEC Staffing Agency <span> | </span>{" "}
            <span> Remote Professionals</span>
          </h4>

          <h1 className={styles.hero__captionTitle}>
            Build <span>smarter</span> with top <span>AEC talent</span>
          </h1>

          <p className={styles.hero__captionText}>
            The construction talent you need, without the hiring hassle
          </p>

          <div className={styles.hero__captionCTA}>
            <button>Get Expert Consultation</button>
            <button>Find a Job</button>
          </div>
        </div>

        <div className={styles.hero__images}></div>
      </section>
    </main>
  );
}
