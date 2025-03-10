import styles from "./SoftwareUsed.module.scss";

export default function SoftwareUsed() {
  const servicesImages = [
    "3ds_max_icon.png",
    "autocad_icon.png",
    "bluebeam_icon.png",
    "buildertrend_icon.png",
    "lumion.png",
    "revit_icon.png",
    "sketchup_icon.png",
    "navisworks_icon.webp",
    "plan_swift_icon.png",
    "smartsheet_icon.png",
  ];

  return (
    <section className={styles.software__used}>
      <h3 className={styles.software__usedTitle}>Software we use</h3>

      <p className={styles.software__usedText}>
        We leverage cutting-edge professional software to craft high-quality,
        customized solutions that tackle every challenge head-on.
      </p>

      <div className={styles.software__usedList}>
        {servicesImages.map((image, index) => (
          <div key={index} className={styles.software__usedItem}>
            <img
              src={`/assets/services/${image}`}
              alt={image.replace("_", " ").replace(".png", "")}
              className={styles.software__usedImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
