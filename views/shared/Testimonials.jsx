import styles from "./Testimonials.module.scss";

export default function Testimonials({
  title = "Real Stories, Real Results",
  testimonials = [],
}) {
  return (
    <section className={styles.testimonials}>
      <span className={styles.testimonials__subCaption}>Testimonials</span>
      <h2 className={styles.testimonials__captionTitle}>{title}</h2>

      <div className={styles.testimonials__list}>
        {testimonials.map((testimonial, index) => {
          const { name, position, avatarImage, text } = testimonial;

          return (
            <div className={styles.testimonials__card} key={index}>
              <img
                src="/assets/home/testimonials/icon_testimonials.png"
                alt="Icon"
                className={styles.testimonials__cardQuote}
              />

              <p className={styles.testimonials__cardText}>{text}</p>

              <div className={styles.testimonials__cardAuthor}>
                <img
                  src={avatarImage}
                  alt="Author"
                  className={styles.testimonials__cardAvatar}
                />
                <div className={styles.testimonials__cardAuthorInfo}>
                  <h5 className={styles.testimonials__cardAuthorName}>
                    {name}
                  </h5>
                  <p className={styles.testimonials__cardAuthorPosition}>
                    {position}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
