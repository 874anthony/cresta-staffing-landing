"use client";
import { useState } from "react";

import styles from "./Testimonials.module.scss";

export default function Testimonials({
  title = "Real Stories, Real Results",
  testimonials = [],
}) {
  const isMobile = window && window.screen.width <= 475;

  const slides = testimonials.flat().map((item) => [item]);

  const [currentSlide, setCurrentSlide] = useState(0);

  // useEffect(() => {
  //   const { width } = window.screen;

  //   if (width <= 475) {
  //     const slidesMobile =
  //     setSlides(slidesMobile);
  //   }
  // }, []);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={styles.testimonials}>
      <span className={styles.testimonials__subCaption}>Testimonials</span>
      <h2 className={styles.testimonials__captionTitle}>{title}</h2>

      {!isMobile && (
        <div className={styles.testimonials__list}>
          {testimonials.map((testimonial, index) => {
            const { name, position, avatarImage, text } = testimonial;

            return (
              <div className={styles.testimonials__card} key={index}>
                <img
                  src="/assets/home/testimonials/icon_testimonials.png"
                  alt="Icon"
                  className={styles.testimonials__cardQuote}
                />

                <p className={styles.testimonials__cardText}>{text}</p>

                <div className={styles.testimonials__cardAuthor}>
                  <img
                    src={avatarImage}
                    alt="Author"
                    className={styles.testimonials__cardAvatar}
                  />
                  <div className={styles.testimonials__cardAuthorInfo}>
                    <h5 className={styles.testimonials__cardAuthorName}>
                      {name}
                    </h5>
                    <p className={styles.testimonials__cardAuthorPosition}>
                      {position}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {isMobile && (
        <>
          <div className={styles.containerMobile}>
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
                    {slide.map((testimonial, testimonialIndex) => {
                      const { name, position, avatarImage, text } = testimonial;

                      return (
                        <div
                          className={styles.testimonials__card}
                          key={testimonialIndex}
                        >
                          <img
                            src="/assets/home/testimonials/icon_testimonials.png"
                            alt="Icon"
                            className={styles.testimonials__cardQuote}
                          />

                          <p className={styles.testimonials__cardText}>
                            {text}
                          </p>

                          <div className={styles.testimonials__cardAuthor}>
                            <img
                              src={avatarImage}
                              alt="Author"
                              className={styles.testimonials__cardAvatar}
                            />
                            <div
                              className={styles.testimonials__cardAuthorInfo}
                            >
                              <h5
                                className={styles.testimonials__cardAuthorName}
                              >
                                {name}
                              </h5>
                              <p
                                className={
                                  styles.testimonials__cardAuthorPosition
                                }
                              >
                                {position}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
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
        </>
      )}
    </section>
  );
}
