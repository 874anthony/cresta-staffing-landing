import styles from "./OurProcess.module.scss";

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function OurProcess() {
  return (
    <section className={styles.ourProcess}>
      <div className={styles.ourProcess__caption}>
        <span className={styles.ourProcess__subCaption}>How to hire?</span>
        <h2 className={styles.ourProcess__captionTitle}>Our process</h2>
        <p className={styles.ourProcess__captionText}>
          Accessing a qualified professional has never been easier. Find out how
          today!
        </p>
      </div>

      <div className={styles.ourProcess__steps}>
        <div className={styles.ourProcess__step}>
          <ProfileIcon />
          <h5 className={styles.ourProcess__stepTitle}>01</h5>
          <p className={styles.ourProcess__stepText}>
            Clear needs, perfect match, all in one call
          </p>

          <p className={styles.ourProcess__stepDescription}>
            We pre-screen candidates to ensure you see only the most qualified,
            saving you valuable time. Each professional is carefully vetted for
            the precise skills, experience, and expertise you require.
          </p>
        </div>

        <div className={styles.ourProcess__step}>
          <ProfileIcon />
          <h5 className={styles.ourProcess__stepTitle}>02</h5>
          <p className={styles.ourProcess__stepText}>
            The right specialist for you
          </p>
        </div>

        <div className={styles.ourProcess__step}>
          <ProfileIcon />
          <h5 className={styles.ourProcess__stepTitle}>03</h5>
          <p className={styles.ourProcess__stepText}>
            Aligning goals & communication
          </p>
        </div>

        <div className={styles.ourProcess__step}>
          <ProfileIcon />
          <h5 className={styles.ourProcess__stepTitle}>04</h5>
          <p className={styles.ourProcess__stepText}>
            Managing HR & monitoring for long-term success
          </p>
        </div>
      </div>
    </section>
  );
}
