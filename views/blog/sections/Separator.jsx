import Button from "@/components/Button";
import { OutlinedInput } from "@mui/material";

import styles from "./Separator.module.scss";

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

export default function Separator() {
  return (
    <section className={styles.separator}>
      <h4 className={styles.separatorTitle}>Stay ahead</h4>
      <span className={styles.separatorText}>
        subscribe for top construction insights and strategies!
      </span>

      <div className={styles.separatorCTA}>
        <OutlinedInput
          id="name"
          type="name"
          placeholder="Enter your name"
          sx={{
            // flex: 1,
            border: "1px solid #E5E5E5",
            borderRadius: "4px",
            color: "#fff",
            paddingLeft: "1rem",
            borderRadius: "999rem",
          }}
          startAdornment={<UserIcon />}
        />

        <OutlinedInput
          id="email"
          type="email"
          placeholder="Enter your email"
          sx={{
            flex: 1,
            border: "1px solid #E5E5E5",
            borderRadius: "4px",
            color: "#fff",
            paddingLeft: "1rem",
            borderRadius: "999rem",
          }}
          startAdornment={<MailIcon />}
        />

        <Button
          variant="secondary"
          size="large"
          sx={{
            fontWeight: "bold",
          }}
        >
          Subscribe Now
        </Button>
      </div>
    </section>
  );
}
