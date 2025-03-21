"use client";
import { useState } from "react";

import Button from "@/components/Button";

import styles from "./OurServices.module.scss";

export default function OurServices({
  title = "Our professional services",
  description = "Expert solutions tailored for you",
  subCaption = "",
  backgroundColor = "",
  backgroundLines = false,
}) {
  const slides = [
    [
      {
        title: "Drafter",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
      {
        title: "3D Renderer",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
      {
        title: "BIM Modeling",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
      {
        title: "Construction Project Manager",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
    ],
    [
      {
        title: "Design Drafter & Documentation",
        text: "This is the remaining service.",
      },
      {
        title: "Estimator",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
      {
        title: "Estimator",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
      {
        title: "Estimator",
        text: "Skilled 3D renderers with technical and creative expertise.",
      },
    ],
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className={`${styles.our__services} ${
        backgroundLines ? styles.our__servicesBackgroundLines : ""
      } ${
        backgroundColor && backgroundColor === "white"
          ? styles.our__servicesWhite
          : ""
      }`}
    >
      {subCaption && (
        <p className={styles.our__servicesSubCaption}>{subCaption}</p>
      )}
      <h3 className={styles.our__servicesTitle}>{title}</h3>
      <p className={styles.our__servicesText}>{description}</p>

      {/* Carousel Container */}
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className={styles.carouselSlide}>
              {slide.map((card, cardIndex) => (
                <div key={cardIndex} className={styles.service__card}>
                  <div className={styles.service__cardContent}>
                    <h2 className={styles.service__cardTitle}>{card.title}</h2>
                    <p className={styles.service__cardText}>{card.text}</p>
                    <Button
                      variant="secondary"
                      rightArrow="true"
                      style={{
                        zIndex: 4,
                      }}
                      onClick={() => console.log("Learn more clicked")}
                    >
                      Learn more
                    </Button>
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
    </section>
  );
}
