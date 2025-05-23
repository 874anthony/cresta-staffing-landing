import { OutlinedInput } from "@mui/material";
import Button from "@/components/Button";

import styles from "./SeparatorChallenge.module.scss";

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={styles.input_icon}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={28}
    height={28}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={styles.input_icon}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
    />
  </svg>
);

export default function SeparatorChallenge() {
  return (
    <section className={styles.aboutSeparator}>
      <h4 className={styles.aboutSeparatorTitle}>Solve Your Challenges</h4>
      <span className={styles.aboutSeparatorText}>With expert consulting</span>

      <div className={styles.aboutSeparatorCTA}>
        <div className={styles.contact__formGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className={styles.contact__formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <Button variant="secondary" size="large">
          Book a consultation
        </Button>
      </div>
    </section>
  );
}
