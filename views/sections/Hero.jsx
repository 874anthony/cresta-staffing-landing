import Button from "@/components/Button";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
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
          <Button variant="primary" size="large">
            Get Expert Consultation
          </Button>
          <Button variant="secondary" size="large">
            Find a job
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <img
          src={"/assets/home/home_banner_slide_1.png"}
          alt="AEC Staffing Agency"
        />

        <img
          src={"/assets/home/home_banner_slide_4.png"}
          alt="AEC Staffing Agency"
        />
      </div>
    </section>
  );
}
