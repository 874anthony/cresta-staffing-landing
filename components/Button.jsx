import styles from "./Button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "normal",
  ...props
}) {
  return (
    <button
      className={`${styles.btn} ${
        variant === "primary" ? styles.btn_primary : styles.btn_secondary
      }
      ${size === "normal" ? "" : styles.btn_large}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
