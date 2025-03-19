import Button from "@/components/Button";

import styles from "./OurServices.module.scss";

export default function OurServices() {
  return (
    <section className={styles.our__services}>
      <h3 className={styles.our__servicesTitle}>Our professional services</h3>
      <p className={styles.our__servicesText}>
        Expert solutions tailored for you
      </p>

      <div className={styles.our__servicesList}>
        <div className={styles.service__card}>
          <div className={styles.service__cardContent}>
            <h2 className={styles.service__cardTitle}>3D Renderer</h2>
            <p className={styles.service__cardText}>
              Skilled 3D renderers with technical and creative expertise.{" "}
            </p>

            <Button variant="secondary" rightArrow="true">
              Learn more
            </Button>
          </div>
        </div>

        <div className={styles.service__card}>
          <div className={styles.service__cardContent}>
            <h2 className={styles.service__cardTitle}>BIM Modelling</h2>
            <p className={styles.service__cardText}>
              Skilled 3D renderers with technical and creative expertise.{" "}
            </p>

            <Button variant="secondary" rightArrow="true">
              Learn more
            </Button>
          </div>
        </div>

        <div className={styles.service__card}>
          <div className={styles.service__cardContent}>
            <h2 className={styles.service__cardTitle}>3D Renderer</h2>
            <p className={styles.service__cardText}>
              Skilled 3D renderers with technical and creative expertise.{" "}
            </p>

            <Button variant="secondary" rightArrow="true">
              Learn more
            </Button>
          </div>
        </div>

        <div className={styles.service__card}>
          <div className={styles.service__cardContent}>
            <h2 className={styles.service__cardTitle}>3D Renderer</h2>
            <p className={styles.service__cardText}>
              Skilled 3D renderers with technical and creative expertise.{" "}
            </p>

            <Button variant="secondary" rightArrow="true">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
