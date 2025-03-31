import styles from "./SoftwareUsed.module.scss";

const servicesImagesGeneral = [
  "/assets/services/icons/sage.png",
  "/assets/services/icons/bluebeam.png",
  "/assets/services/icons/3d1.png",
  "/assets/services/icons/graphisoft_archicad.png",
  "/assets/services/icons/infraworks.png",
  "/assets/services/icons/procore.png",
  "/assets/services/icons/3d4.png",
  "/assets/services/icons/autocad.png",
  "/assets/services/icons/revit.png",
  "/assets/services/icons/3d8.png",
];

export default function SoftwareUsed({
  servicesImages = servicesImagesGeneral,
}) {
  return (
    <>
      <section className={styles.software__used}>
        <h3 className={styles.software__usedTitle}>Software we use</h3>

        <p className={styles.software__usedText}>
          We leverage cutting-edge professional software to craft high-quality,
          customized solutions that tackle every challenge head-on.
        </p>
      </section>

      <div className={styles.software__usedList}>
        <div className={styles.software__firstRow}>
          {[
            ...servicesImages.slice(0, 5),
            ...servicesImages.slice(0, 5),
            ...servicesImages.slice(0, 5),
          ].map((image, index) => (
            <div key={index} className={styles.software__usedItem}>
              <img
                src={image}
                alt={image.replace("_", " ").replace(".png", "")}
                className={styles.software__usedImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.software__secondRow}>
          {[
            ...servicesImages.slice(5),
            ...servicesImages.slice(5),
            ...servicesImages.slice(5),
          ].map((image, index) => (
            <div key={index} className={styles.software__usedItem}>
              <img
                src={image}
                alt={image.replace("_", " ").replace(".png", "")}
                className={styles.software__usedImage}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
