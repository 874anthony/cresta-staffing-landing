"use client";
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";

import Button from "@/components/Button";

import styles from "./OurServices.module.scss";

export default function OurServices({
  title = "Our professional services",
  description = "Expert solutions tailored for you",
  subCaption = "",
  backgroundColor = "",
  backgroundLines = false,
  mobileCorners = false,
}) {
  const initialSlides = [
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

  const [slides, setSlides] = useState(initialSlides);
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  useEffect(() => {
    const { width } = window.screen;

    if (width <= 475) {
      const slidesMobile = slides.flat().map((item) => [item]);
      setSlides(slidesMobile);
    }
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentSlide < slides.length - 1) {
        setCurrentSlide(currentSlide + 1);
      }
    },
    onSwipedRight: () => {
      if (currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // optional: allows swipe detection with a mouse
  });

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
      }
      ${mobileCorners ? styles.our__servicesMobileCorners : ""}`}
    >
      {subCaption && (
        <p className={styles.our__servicesSubCaption}>{subCaption}</p>
      )}
      <h3 className={styles.our__servicesTitle}>{title}</h3>
      <p className={styles.our__servicesText}>{description}</p>

      {/* Carousel Container */}
      <div className={styles.carouselContainer} {...swipeHandlers}>
        {/* Carousel Track */}
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
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
