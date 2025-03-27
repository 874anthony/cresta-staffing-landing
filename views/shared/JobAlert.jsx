import Button from "@/components/Button";

import styles from "./JobAlert.module.scss";

export default function JobAlert({ roundedTopCorner = false }) {
  // const [day, setDay] = useState("");

  // const handleChange = (event) => {
  //   setDay(event.target.value);
  // };

  return (
    <section
      className={`
      ${styles.job__alert}
      ${roundedTopCorner ? styles.job__alertRounded : ""}`}
    >
      <h4 className={styles.job__alertTitle}>Create job alert</h4>

      <p className={styles.job__alertText}>
        Stay up-to-date with new opportunities
      </p>

      <div className={styles.job__alertForm}>
        <div className={styles.contact__formGroup}>
          <label htmlFor="firstName">First name</label>
          <input type="text" id="firstName" name="firstName" />
        </div>

        <div className={styles.contact__formGroup}>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" />
        </div>

        <Button variant="secondary" size="large">
          Submit
        </Button>
      </div>
    </section>
  );
}
