import styles from "./Testimonials.module.scss";

export default function Testimonials({ title = "Real Stories, Real Results" }) {
  return (
    <section className={styles.testimonials}>
      <span className={styles.testimonials__subCaption}>Testimonials</span>
      <h2 className={styles.testimonials__captionTitle}>{title}</h2>

      <div className={styles.testimonials__list}>
        <div className={styles.testimonials__card}>
          <img
            src="/assets/home/testimonials/icon_testimonials.png"
            alt="Icon"
            className={styles.testimonials__cardQuote}
          />

          <p className={styles.testimonials__cardText}>
            The supportive and energetic environment makes me feel truly valued.
            From day one, Iʼve been encouraged to share ideas, take initiative,
            and grow, knowing that I have a team ready to support me every step
            of the way.
          </p>

          <div className={styles.testimonials__cardAuthor}>
            <img
              src="/assets/home/testimonials/team_1.jpg"
              alt="Author"
              className={styles.testimonials__cardAvatar}
            />
            <div className={styles.testimonials__cardAuthorInfo}>
              <h5 className={styles.testimonials__cardAuthorName}>John Doe</h5>
              <p className={styles.testimonials__cardAuthorPosition}>
                CEO, Company Name
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonials__card}>
          <img
            src="/assets/home/testimonials/icon_testimonials.png"
            alt="Icon"
            className={styles.testimonials__cardQuote}
          />

          <p className={styles.testimonials__cardText}>
            What I love most about working at Cresta is having a supportive team
            that helps me grow. They are always willing to teach me everything I
            want to learn, so I never feel alone when facing a client—I know
            they are right there with me"
          </p>

          <div className={styles.testimonials__cardAuthor}>
            <img
              src="/assets/home/testimonials/team_1.jpg"
              alt="Author"
              className={styles.testimonials__cardAvatar}
            />
            <div className={styles.testimonials__cardAuthorInfo}>
              <h5 className={styles.testimonials__cardAuthorName}>John Doe</h5>
              <p className={styles.testimonials__cardAuthorPosition}>
                CEO, Company Name
              </p>
            </div>
          </div>
        </div>

        <div className={styles.testimonials__card}>
          <img
            src="/assets/home/testimonials/icon_testimonials.png"
            alt="Icon"
            className={styles.testimonials__cardQuote}
          />

          <p className={styles.testimonials__cardText}>
            The supportive and energetic environment makes me feel truly valued.
            From day one, Iʼve been encouraged to share ideas, take initiative,
            and grow, knowing that I have a team ready to support me every step
            of the way.
          </p>

          <div className={styles.testimonials__cardAuthor}>
            <img
              src="/assets/home/testimonials/team_1.jpg"
              alt="Author"
              className={styles.testimonials__cardAvatar}
            />
            <div className={styles.testimonials__cardAuthorInfo}>
              <h5 className={styles.testimonials__cardAuthorName}>John Doe</h5>
              <p className={styles.testimonials__cardAuthorPosition}>
                CEO, Company Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
