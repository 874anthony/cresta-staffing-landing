import styles from "./Overview.module.scss";

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={38}
    viewBox="0 0 24 24"
    fill="rgba(24, 99, 194, 255)"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function Overview({
  overviewItems,
  overviewImage,
  overviewDescription,
}) {
  return (
    <section className={styles.overview}>
      <div className={styles.overview__checklist}>
        {overviewItems.map((item, index) => (
          <div key={index} className={styles.overview__checklistItem}>
            <CheckIcon />
            <p>{item}</p>
          </div>
        ))}
      </div>

      <div className={styles.overview__cta}>
        <div className={styles.overview__images}>
          <img src={overviewImage} alt="Service Image" />
        </div>

        <div className={styles.overview__caption}>
          <h3 className={styles.overview__captionTitle}>Who am I hiring</h3>

          <p className={styles.overview__captionText}>{overviewDescription}</p>
        </div>
      </div>
    </section>
  );
}
