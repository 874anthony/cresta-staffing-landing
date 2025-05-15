"use client";
import { useState } from "react";
import { useCarousel } from "@/hooks/useCarousel";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";
import { CheckZoomIcon } from "@/components/icons/CheckZoomIcon";
import styles from "./ApplicationProcess.module.scss";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

const stepsData = [
  {
    title: "01",
    text: "Find your perfect fit & apply",
    description:
      "Explore and choose the role that best matches your skills, experience, and career goals.",
    icon: <CheckZoomIcon />,
  },
  {
    title: "02",
    text: "Letʼs connect!",
    description:
      "Apply for the role that excites you! If your skills match our needs, we’ll connect for a friendly chat to learn more about you and your career goals. Time to shine!",
    icon: <CheckZoomIcon />,
  },
  {
    title: "03",
    text: "Showcase you skills (test project)",
    description:
      "It's a win-win: you get to highlight your abilities through a test project, and we get to see your strengths.",
    icon: <CheckZoomIcon />,
  },
  {
    title: "04",
    text: "Meet the team: Interview & portfolio",
    description:
      "You'll have an in-depth chat with the Hiring Manager about your experience, goals, and potential role at Cresta. Afterward, we'll guide you in refining your portfolio to impress our client.",
    icon: <CheckZoomIcon />,
  },
  {
    title: "05",
    text: "Meet the team: Client interview",
    description:
      "You'll have the chance to connect directly with our client, make a great impression, and show them why you're the perfect fit for their team.",
    icon: <CheckZoomIcon />,
  },
  {
    title: "06",
    text: "Welcome aboard!",
    description:
      "Congratulations! You're a match, get ready to embark on an exciting new chapter with Cresta. We can't wait to welcome you to the team!",
    icon: <CheckZoomIcon />,
  },
];

export default function ApplicationProcess() {
  const smoothScroll = useSmoothScroll();
  const weeklyJobs = "weekly-jobs";

  const isMobile = useIsMobile(475);
  const [currentSlide, setCurrentSlide] = useState(0);

  // activeStep is 0-indexed: 0 means no step active or starting state.
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = stepsData.length;

  const slides = stepsData.map((step) => [step]);
  const { swipeHandlers } = useCarousel({
    currentSlide,
    setCurrentSlide,
    slidesLength: slides.length,
    autoPlay: true,
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
    <section className={styles.appProcess}>
      <div className={styles.appProcess__caption}>
        <span className={styles.appProcess__subCaption}>How to Apply?</span>
        <h2 className={styles.appProcess__captionTitle}>Application process</h2>
        <p className={styles.appProcess__captionText}>
          {totalSteps} Simple steps to <span>Get Started</span>
        </p>
      </div>

      {!isMobile && (
        <>
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

          {/* Steps */}
          <div className={styles.appProcess__steps}>
            {stepsData.map((step, index) => (
              <div
                key={index}
                className={styles.appProcess__step}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <div className={styles.appProcess__stepHeader}>
                  {step.icon}
                  <h5 className={styles.appProcess__stepTitle}>{step.title}</h5>
                  <p className={styles.appProcess__stepText}>{step.text}</p>
                </div>
                <div className={styles.appProcess__stepDescription}>
                  {step.description}
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {isMobile && (
        <div className={styles.containerMobile}>
          {/* Carousel Container */}
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
                  {slide.map((step, stepIndex) => (
                    <div key={stepIndex} className={styles.appProcess__step}>
                      <div className={styles.appProcess__stepHeader}>
                        {step.icon}
                        <h5 className={styles.appProcess__stepTitle}>
                          {step.title}
                        </h5>
                        <p className={styles.appProcess__stepText}>
                          {step.text}
                        </p>
                      </div>
                      <div className={styles.appProcess__stepDescription}>
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
      )}

      <Button
        variant="secondary"
        size="large"
        style={{
          marginTop: "2rem",
          fontSize: isMobile ? "0.875rem" : "1.275rem",
          padding: isMobile ? "0.6rem 2.4rem" : "1rem 6rem",
        }}
        onClick={() => smoothScroll(weeklyJobs)}
      >
        Apply Now
      </Button>
    </section>
  );
}
