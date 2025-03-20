"use client";
import { useState } from "react";

import styles from "./OurProcess.module.scss";

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
      clipRule="evenodd"
    />
  </svg>
);

export default function OurProcess() {
  // activeStep is 0-indexed: 0 means no step active or starting state.
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  // Optionally, define your steps as an array to map over them:
  const stepsData = [
    {
      title: "01",
      text: "Clear needs, perfect match, all in one call",
      description:
        "We pre-screen candidates to ensure you see only the most qualified...",
      icon: <ProfileIcon />,
    },
    {
      title: "02",
      text: "The right specialist for you",
      icon: <ProfileIcon />,
    },
    {
      title: "03",
      text: "Aligning goals & communication",
      icon: <ProfileIcon />,
    },
    {
      title: "04",
      text: "Managing HR & monitoring for long-term success",
      description:
        "Cresta takes care of all the arrangements, setting the stage for a successful...",
      icon: <ProfileIcon />,
    },
  ];

  const handleMouseEnter = (index) => {
    setActiveStep(index + 1); // Now, first card sets activeStep to 1.
  };

  const handleMouseLeave = () => {
    setActiveStep(0);
  };

  const lineFill =
    activeStep > 0 ? ((activeStep - 1) / (totalSteps - 1)) * 100 : 0;

  return (
    <section className={styles.ourProcess}>
      <div className={styles.ourProcess__caption}>
        <span className={styles.ourProcess__subCaption}>How to hire?</span>
        <h2 className={styles.ourProcess__captionTitle}>Our process</h2>
        <p className={styles.ourProcess__captionText}>
          Accessing a qualified professional has never been easier. Find out how
          today!
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

      {/* Steps */}
      <div className={styles.ourProcess__steps}>
        {stepsData.map((step, index) => (
          <div
            key={index}
            className={styles.ourProcess__step}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {step.icon}
            <h5 className={styles.ourProcess__stepTitle}>{step.title}</h5>
            <p className={styles.ourProcess__stepText}>{step.text}</p>
            {step.description && (
              <p className={styles.ourProcess__stepDescription}>
                {step.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
