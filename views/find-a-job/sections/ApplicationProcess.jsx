import Button from "@/components/Button";
import styles from "./ApplicationProcess.module.scss";

const ZoomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
    />
  </svg>
);

export default function ApplicationProcess() {
  return (
    <section className={styles.appProcess}>
      <div className={styles.appProcess__caption}>
        <span className={styles.appProcess__subCaption}>How to Apply?</span>
        <h2 className={styles.appProcess__captionTitle}>Application process</h2>
        <p className={styles.appProcess__captionText}>
          6 Simple steps to <span>Get Started</span>
        </p>
      </div>

      <div className={styles.appProcess__steps}>
        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>01</h5>
          <p className={styles.appProcess__stepText}>
            Clear needs, perfect match, all in one call
          </p>

          <p className={styles.appProcess__stepDescription}>
            We pre-screen candidates to ensure you see only the most qualified,
            saving you valuable time. Each professional is carefully vetted for
            the precise skills, experience, and expertise you require.
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>02</h5>
          <p className={styles.appProcess__stepText}>
            The right specialist for you
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>03</h5>
          <p className={styles.appProcess__stepText}>
            Aligning goals & communication
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Managing HR & monitoring for long-term success
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Meet the team: Client interview
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Managing HR & monitoring for long-term success
          </p>
        </div>
      </div>

      <Button
        variant="secondary"
        size="large"
        style={{
          marginTop: "2rem",
          padding: "1rem 6rem",
        }}
      >
        Apply Now
      </Button>
    </section>
  );
}
