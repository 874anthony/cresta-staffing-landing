import Button from "@/components/Button";
import styles from "./Navbar.module.scss";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/assets/cresta_logo.png" alt="Cresta Logo" />
      </div>

      <nav className={styles.nav}>
        <ul className={styles.nav__list}>
          <li className={styles.nav__item}>
            <a href="#">
              Services{" "}
              <span>
                <ChevronDown />
              </span>
            </a>

            <ul className={styles.nav__dropdown}>
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>

          <li className={styles.nav__item}>
            <a href="#">
              About{" "}
              <span>
                <ChevronDown />
              </span>
            </a>

            <ul className={styles.nav__dropdown}>
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>

          <li className={styles.nav__item}>
            <a href="#">Blog</a>
          </li>

          <li className={styles.nav__item}>
            <a href="#">FAQ</a>
          </li>
        </ul>

        <div className={styles.nav__cta}>
          <Button variant="secondary" fontWeight="bold">
            Find a job
          </Button>
          <Button variant="primary" fontWeight="bold">
            Get Expert Consultation
          </Button>
        </div>
      </nav>
    </header>
  );
}
