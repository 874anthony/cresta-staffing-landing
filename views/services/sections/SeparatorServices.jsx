import Button from "@/components/Button";

import styles from "./SeparatorServices.module.scss";

export default function SeparatorServices() {
  return (
    <section className={styles.cta__separator}>
      <h4 className={styles.cta__separatorTitle}>
        Take your project to the <span>next level</span> with our{" "}
        <span>construction professionals.</span>
      </h4>

      <Button
        variant="secondary"
        size="large"
        fontWeight="bold"
        style={{
          fontSize: "1.275rem",
        }}
      >
        Get Expert Consultation
      </Button>
    </section>
  );
}
