"use client";
import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";

import styles from "./BenefitsJob.module.scss";

const items = [
  {
    title: "The world is hiring",
    text: "Work on cutting-edge projects with global impact. We connect top talent with incredible opportunities worldwide. Your dream international career starts here!",
    image: "/assets/jobs/images/find_job_ilustration_1.png",
  },
  {
    title: "Get paid what you're worth",
    text: "Your skills deserve top pay! We connect you with remote opportunities offering competitive salaries in USD and access to high-value international clients.",
    image: "/assets/jobs/images/find_job_ilustration_2.png",
  },
  {
    title: "Work anywhere, grow everywhere",
    text: "Enjoy ultimate flexibility with remote opportunities, work from home or anywhere you choose! Achieve work-life balance and take control of your career. Your job, your rules!",
    image: "/assets/jobs/images/find_job_ilustration_3.png",
  },
  {
    title: "Grow, learn, succeed",
    text: "Cresta is dedicated to your success! We offer continuous learning and development programs to help you grow, master new skills, and reach your full potential.",
    image: "/assets/jobs/images/find_job_ilustration_4.png",
  },
];

export default function BenefitsJob() {
  const isMobile = useIsMobile(475);
  const slides = items.map((benefit) => [benefit]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.benefitsContainer}>
      <div className={styles.benefits__titleContainer}>
        <span className={styles.benefits__subCaption}>
          Why do top professionals choose Cresta?
        </span>

        <h2 className={styles.benefits__captionTitle}>
          Benefits of working with Cresta
        </h2>
        <p className={styles.benefits__captionText}>
          Connecting your talent to the perfect career destination!
        </p>
      </div>

      {!isMobile && (
        <div className={styles.benefits__list}>
          {items.map((item, index) => (
            <div key={index} className={styles.benefits__listItem}>
              <img
                className={styles.benefits__itemImage}
                src={item.image}
                alt={`benefits_${index + 1}`}
              />

              <div className={styles.benefits__itemContent}>
                <h4 className={styles.benefits__itemTitle}>{item.title}</h4>
                <p className={styles.benefits__itemText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <div className={styles.containerMobile}>
          {/* Carousel Container */}
          <div className={styles.carouselContainer}>
            <div
              className={styles.carouselTrack}
              style={{
                transform: `translateX(-${
                  currentSlide * (100 / slides.length)
                }%)`,
              }}
            >
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} className={styles.carouselSlide}>
                  {slide.map((benefit, benefitIndex) => (
                    <div
                      key={benefitIndex}
                      className={styles.benefits__listItem}
                    >
                      <img
                        className={styles.benefits__itemImage}
                        src={benefit.image}
                        alt={`benefits_${benefitIndex + 1}`}
                      />

                      <div className={styles.benefits__itemContent}>
                        <h4 className={styles.benefits__itemTitle}>
                          {benefit.title}
                        </h4>
                        <p className={styles.benefits__itemText}>
                          {benefit.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className={styles.carouselDots}>
            {slides.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  currentSlide === index ? styles.active : ""
                }`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
