import styles from "./SoftwareUsed.module.scss";

export default function SoftwareUsed() {
  const servicesImages = [
    "sage.png",
    "bluebeam.png",
    "3d1.png",
    "graphisoft_archicad.png",
    "infraworks.png",
    "procore.png",
    "3d4.png",
    "autocad.png",
    "revit.png",
    "3d8.png",
  ];

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
          {servicesImages.slice(0, 5).map((image, index) => (
            <div key={index} className={styles.software__usedItem}>
              <img
                src={`/assets/services/icons/${image}`}
                alt={image.replace("_", " ").replace(".png", "")}
                className={styles.software__usedImage}
              />
            </div>
          ))}
        </div>

        <div className={styles.software__secondRow}>
          {servicesImages.slice(5).map((image, index) => (
            <div key={index} className={styles.software__usedItem}>
              <img
                src={`/assets/services/icons/${image}`}
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
