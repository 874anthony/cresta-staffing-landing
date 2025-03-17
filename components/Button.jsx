import styles from "./Button.module.scss";

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

export default function Button({
  children,
  variant = "primary",
  size = "normal",
  fontWeight = "normal",
  rightArrow = false,
  ...props
}) {
  return (
    <button
      className={`${styles.btn} ${
        variant === "primary" ? styles.btn_primary : styles.btn_secondary
      }
      ${size === "normal" ? "" : styles.btn_large}
      ${rightArrow ? styles.btn_rightArrow : ""}
      ${fontWeight === "bold" ? styles.btn_bold : ""}
      `}
      {...props}
    >
      {children}

      {rightArrow && <ChevronRight />}
    </button>
  );
}
