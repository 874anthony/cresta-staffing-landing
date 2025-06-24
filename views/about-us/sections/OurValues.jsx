import { useState } from "react";
import useIsMobile from "@/hooks/useIsMobile";
import { useSwipeable } from "react-swipeable";

import styles from "./OurValues.module.scss";

const values = [
  {
    id: "01",
    title: "Commitment",
    description:
      "We deliver quality service and support to both clients and employees, ensuring satisfaction.",
    illustration: "/assets/about/values/illustration_commitment.png",
  },
  {
    id: "02",
    title: "Responsibility",
    description:
      "We prioritize our team's well-being and development, and the success of our clients' projects.",
    illustration: "/assets/about/values/illustration_responsibility.png",
  },
  {
    id: "03",
    title: "Excellence",
    description:
      "We aim for excellence in our staffing and operations, always exceeding expectations.",
    illustration: "/assets/about/values/illustration_excellence.png",
  },
  {
    id: "04",
    title: "Trust",
    description:
      "We build lasting relationships based on trust, transparency, and mutual respect with all our stakeholders.",
    illustration: "/assets/about/values/illustration_trust.png",
  },
  {
    id: "05",
    title: "Safety",
    description:
      "We prioritize safety in all our operations, ensuring a secure and healthy work environment for everyone.",
    illustration: "/assets/about/values/illustration_safety.png",
  },
  {
    id: "06",
    title: "Adaptability",
    description:
      "We embrace change and innovation, adapting quickly to meet evolving client needs and market demands.",
    illustration: "/assets/about/values/illustration_adaptability.png",
  },
];

export default function OurValues() {
  const isMobile = useIsMobile(475);
  const slides = values.flat().map((value) => [value]);

  const [currentSlide, setCurrentSlide] = useState(0);

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
    <section className={styles.our__values}>
      <p className={styles.our__valuesSubCaption}>Cresta core</p>
      <h3 className={styles.our__valuesTitle}>Our values</h3>
      <p className={styles.our__valuesText}>
        Our core values are part of everything we do at Cresta, they are what
        inspire us to do better.
      </p>

      {!isMobile && (
        <div className={styles.our__valuesGrid}>
          {values.map((value) => (
            <div key={value.id} className={styles.valueCard}>
              <span className={styles.valueCard__number}>{value.id}</span>
              <h4 className={styles.valueCard__title}>{value.title}</h4>
              <div className={styles.valueCard__illustration}>
                <img
                  src={value.illustration}
                  alt={`${value.title} illustration`}
                />
              </div>
              <p className={styles.valueCard__description}>
                {value.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {isMobile && (
        <>
          <div className={styles.containerMobile}>
            <div className={styles.carouselContainer} {...swipeHandlers}>
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
                    {slide.map((value) => (
                      <div key={value.id} className={styles.valueCard}>
                        <span className={styles.valueCard__number}>
                          {value.id}
                        </span>
                        <h4 className={styles.valueCard__title}>
                          {value.title}
                        </h4>
                        <div className={styles.valueCard__illustration}>
                          <img
                            src={value.illustration}
                            alt={`${value.title} illustration`}
                          />
                        </div>
                        <p className={styles.valueCard__description}>
                          {value.description}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

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
        </>
      )}
    </section>
  );
}
