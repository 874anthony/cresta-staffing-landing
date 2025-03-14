import styles from "./OurMisionVision.module.scss";

export default function OurVisionMision() {
  return (
    <section className={styles.ourMissionAndVision}>
      <div className={styles.ourMission}>
        <img
          className={styles.ourMissionIcon}
          src="/assets/about/mission/about_5.png"
          alt="Image of our mission"
        />

        <div className={styles.ourMissionContent}>
          <h5 className={styles.ourMissionSubCaption}>Our Mission</h5>
          <h2 className={styles.ourMissionTitle}>Building success</h2>

          <span className={styles.ourMissionText}>
            Connecting top talent with leading construction firms
          </span>

          <p className={styles.ourMissionDescription}>
            We specialize in seamlessly matching construction businesses with
            skilled, pre-screened professionals. Through innovative workforce
            solutions and a commitment to reliability, we drive industry
            progress, fuel innovation, and help build lasting legacies.
          </p>
        </div>
      </div>

      <div className={styles.ourVision}>
        <img
          className={styles.ourVisionIcon}
          src="/assets/about/mission/about_6.png"
          alt="Image of our mission"
        />

        <div className={styles.ourVisionContent}>
          <h5 className={styles.ourVisionSubCaption}>Our Vision</h5>
          <h2 className={styles.ourVisionTitle}>Redefining AEC Staffing</h2>

          <span className={styles.ourVisionText}>
            We pioneer the future of construction
          </span>

          <p className={styles.ourVisionDescription}>
            At Cresta, weʼre redefining construction staffing, boosting
            efficiency, reliability, and excellence. By driving innovation and
            collaboration, we connect top-tier talent to help every project
            thrive. Together, we build smarter, faster, and stronger.
          </p>
        </div>
      </div>
    </section>
  );
}
