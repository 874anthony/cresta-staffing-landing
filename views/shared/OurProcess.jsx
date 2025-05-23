"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

import { ProfileIcon } from "@/components/icons/ProfileIcon";
import { CheckZoomIcon } from "@/components/icons/CheckZoomIcon";
import { PrecisionIcon } from "@/components/icons/PrecisionIcon";
import { CheckmarkIcon } from "@/components/icons/CheckmarkIcon";

import styles from "./OurProcess.module.scss";

const stepsData = [
  {
    title: "01",
    text: "Clear needs, perfect match, all in one call",
    description:
      "Our process starts with a deep dive into your specific needs, ensuring we identify the right skills, experience, and cultural fit. Once aligned, you'll receive a tailored job description, and our consultants will guide you every step of the way.",
    icon: <ProfileIcon />,
  },
  {
    title: "02",
    text: "The right specialist for you",
    description:
      "We pre-screen candidates to ensure you see only the most qualified, saving you valuable time. Each professional is carefully vetted for the precise skills, experience, and expertise you require.",
    icon: <CheckZoomIcon />,
  },
  {
    title: "03",
    text: "Aligning goals & communication",
    description:
      "Once you've found the perfect fit, we facilitate a successful onboarding, including a kickoff meeting to connect, set goals, align communication, and ensure a seamless transition.",
    icon: <PrecisionIcon />,
  },
  {
    title: "04",
    text: "Managing HR & monitoring for long-term success",
    description:
      "Cresta takes care of all the arrangements, setting the stage for a successful remote collaboration with your selected professional. We'll maintain regular contact with both of you to provide ongoing support and ensure a productive partnership.",
    icon: <CheckmarkIcon />,
  },
];

export default function OurProcess() {
  const slides = stepsData.map((step) => [step]);

  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // activeStep is 0-indexed: 0 means no step active or starting state.
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

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

  const handleMouseEnter = (index) => {
    setActiveStep(index + 1); // Now, first card sets activeStep to 1.
  };

  const handleMouseLeave = () => {
    setActiveStep(0);
  };

  const lineFill =
    activeStep > 0 ? ((activeStep - 1) / (totalSteps - 1)) * 100 : 0;

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className={styles.ourProcess}>
        <div className={styles.ourProcess__caption}>
          <span className={styles.ourProcess__subCaption}>How to hire?</span>
          <h2 className={styles.ourProcess__captionTitle}>Our process</h2>
          <p className={styles.ourProcess__captionText}>
            Accessing a qualified professional has never been easier. Find out
            how today!
          </p>
        </div>

        {/* Stepper line */}
        <div className={styles.stepper}>
          {/* Filled progress line */}
          <div
            className={styles.stepperLine}
            style={{
              width: `${lineFill}%`,
            }}
          ></div>

          {/* 4 Dots for the steps */}
          {Array.from({ length: totalSteps }).map((_, index) => (
            <span
              key={index}
              className={`${styles.stepperDot} ${
                index < activeStep ? styles.activeDot : ""
              }`}
              // Distribute dots evenly from 0% to 100% along the line:
              style={{ left: `${(index / (totalSteps - 1)) * 100}%` }}
            ></span>
          ))}
        </div>
      </section>

      {/* Steps */}
      <div className={styles.ourProcess__steps}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={styles.ourProcess__step}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className={styles.ourProcess__stepHeader}>
              {step.icon}
              <h5 className={styles.ourProcess__stepTitle}>{step.title}</h5>
              <p className={styles.ourProcess__stepText}>{step.text}</p>
            </div>
            <div className={styles.ourProcess__stepDescription}>
              {step.description}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.containerMobile}>
        {/* Carousel Container */}
        <div className={styles.carouselContainer} {...swipeHandlers}>
          {/* Carousel Track */}
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
                {slide.map((step, stepIndex) => (
                  <div key={stepIndex} className={styles.ourProcess__step}>
                    <div className={styles.ourProcess__stepHeader}>
                      {step.icon}
                      <h5 className={styles.ourProcess__stepTitle}>
                        {step.title}
                      </h5>
                      <p className={styles.ourProcess__stepText}>{step.text}</p>
                    </div>
                    <div className={styles.ourProcess__stepDescription}>
                      {step.description}
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
    </>
  );
}
