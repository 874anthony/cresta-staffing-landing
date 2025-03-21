import Button from "@/components/Button";

import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <section id="home-expert-consultation" className={styles.contact__section}>
      <img src="/assets/home/contact/contact-us.png" alt="Contact Us Image" />

      <div className={styles.contact__container}>
        <div className={styles.contact__text}>
          <h5 className={styles.contact__title}>Get in touch with us</h5>
          <p className={styles.contact__description}>
            Our dedicated team is here to provide you with the best service and
            support.
          </p>
        </div>

        <form className={styles.contact__form}>
          <div className={styles.contact__formGroup}>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" name="firstName" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" name="lastName" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" id="phone" name="phone" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className={styles.contact__formGroup}>
            <label htmlFor="message">Tell us how we can help</label>
            <textarea id="message" rows={4} name="message"></textarea>
          </div>

          <div className={styles.contact__submit}>
            <div className={styles.contact__terms}>
              <input type="checkbox" id="terms" name="terms" />
              <label htmlFor="terms">I agree to the Privacy Policy</label>
            </div>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
