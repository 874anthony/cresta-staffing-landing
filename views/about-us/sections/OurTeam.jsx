"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useIsMobile from "@/hooks/useIsMobile";

import styles from "./OurTeam.module.scss";

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
);

const members = [
  [
    {
      name: "Juan Mercado Toloza",
      position: "Hiring Manager",
      email: "juan.m@crestastaffing.com",
    },
    {
      name: "Juan Mercado Toloza",
      position: "Hiring Manager",
      email: "juan.m@crestastaffing.com",
    },
    {
      name: "Juan Mercado Toloza",
      position: "Hiring Manager",
      email: "juan.m@crestastaffing.com",
    },
  ],
];

export default function OurTeam() {
  const isMobile = useIsMobile(475);
  const slides = isMobile ? members.flat().map((member) => [member]) : members;

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
    <section className={styles.ourTeam}>
      <h3 className={styles.ourTeam__Title}>Meet our team</h3>
      <p className={styles.ourTeam__Text}>
        Meet the professionals you can collaborate with.
      </p>

      <div className={styles.carouselContainer} {...swipeHandlers}>
        {/* Carousel Track */}
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className={styles.carouselSlide}>
              {slide.map((card, cardIndex) => (
                <div key={cardIndex} className={styles.member__card}>
                  <div className={styles.member__cardContent}>
                    <h2 className={styles.member__cardTitle}>{card.name}</h2>
                    <p className={styles.member__cardPosition}>
                      {card.position}
                    </p>
                    <p className={styles.member__cardEmail}>{card.email}</p>

                    <button className={styles.member__cardButton}>
                      LinkedIn
                      <ChevronRight />
                    </button>
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
