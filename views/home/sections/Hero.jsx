"use client";
import { useState, useEffect } from "react";

import Button from "@/components/Button";
import styles from "./Hero.module.scss";

const topImages = [
  "/assets/home/home_banner_slide_1.png",
  "/assets/home/home_banner_slide_3.png",
];
const bottomImages = [
  "/assets/home/home_banner_slide_4.png",
  "/assets/home/home_banner_slide_6.png",
];

export default function Hero() {
  const [topIndex, setTopIndex] = useState(0);
  const [bottomIndex, setBottomIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to update the active index every 3 seconds
    const intervalId = setInterval(() => {
      setTopIndex((prev) => (prev + 1) % topImages.length);
      setBottomIndex((prev) => (prev + 1) % bottomImages.length);
    }, 5500);

    return () => clearInterval(intervalId);
  }, [topImages.length, bottomImages.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__caption}>
        <h4 className={styles.hero__captionSubtitle}>
          AEC Staffing Agency <span> | </span>{" "}
          <span> Remote Professionals</span>
        </h4>

        <h1 className={styles.hero__captionTitle}>
          Build <span>smarter</span> with top <span>AEC talent</span>
        </h1>

        <p className={styles.hero__captionText}>
          The construction talent you need, without the hiring hassle
        </p>

        <div className={styles.hero__captionCTA}>
          <Button variant="primary" size="large">
            Get Expert Consultation
          </Button>
          <Button variant="secondary" size="large">
            Find a job
          </Button>
        </div>
      </div>

      <div className={styles.hero__images}>
        <div className={styles.topImages}>
          {topImages.map((src, index) => (
            <img
              key={`top-${index}`}
              src={src}
              alt="AEC Staffing Agency"
              className={`
                ${styles.top} ${index === topIndex ? styles.active : ""}
              `}
            />
          ))}
        </div>
        <div className={styles.bottomImages}>
          {bottomImages.map((src, index) => (
            <img
              key={`bottom-${index}`}
              src={src}
              alt="AEC Staffing Agency"
              className={`
                ${styles.bottom} ${index === bottomIndex ? styles.active : ""}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
