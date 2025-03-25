"use client";
import { useState } from "react";

import Button from "@/components/Button";

import styles from "./ApplicationProcess.module.scss";

const ZoomIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={36}
    height={36}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
    />
  </svg>
);

export default function ApplicationProcess() {
  // activeStep is 0-indexed: 0 means no step active or starting state.
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 6;

  const stepsData = [
    {
      title: "01",
      text: "Find your perfect fit & apply",
      description:
        "We pre-screen candidates to ensure you see only the most qualified...",
      icon: <ZoomIcon />,
    },
    {
      title: "02",
      text: "Letʼs connect!",
      description:
        "We pre-screen candidates to ensure you see only the most qualified, saving you valuable time. Each professional is carefully vetted for the precise skills, experience, and expertise you require.",
      icon: <ZoomIcon />,
    },
    {
      title: "03",
      text: "Showcase you skills (test project)",
      description:
        "We pre-screen candidates to ensure you see only the most qualified, saving you valuable time. Each professional is carefully vetted for the precise skills, experience, and expertise you require.",
      icon: <ZoomIcon />,
    },
    {
      title: "04",
      text: "Meet the team: Interview & portfolio",
      description:
        "Cresta takes care of all the arrangements, setting the stage for a successful...",
      icon: <ZoomIcon />,
    },
    {
      title: "05",
      text: "Meet the team: Client interview",
      description:
        "Cresta takes care of all the arrangements, setting the stage for a successful...",
      icon: <ZoomIcon />,
    },
    {
      title: "06",
      text: "Welcome aboard!",
      description:
        "Cresta takes care of all the arrangements, setting the stage for a successful...",
      icon: <ZoomIcon />,
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
    <section className={styles.appProcess}>
      <div className={styles.appProcess__caption}>
        <span className={styles.appProcess__subCaption}>How to Apply?</span>
        <h2 className={styles.appProcess__captionTitle}>Application process</h2>
        <p className={styles.appProcess__captionText}>
          6 Simple steps to <span>Get Started</span>
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

      <Button
        variant="secondary"
        size="large"
        style={{
          marginTop: "2rem",
          padding: "1rem 6rem",
        }}
      >
        Apply Now
      </Button>
    </section>
  );
}

{
  /* <div className={styles.appProcess__steps}>
        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>01</h5>
          <p className={styles.appProcess__stepText}>
            Clear needs, perfect match, all in one call
          </p>

          <p className={styles.appProcess__stepDescription}>
            We pre-screen candidates to ensure you see only the most qualified,
            saving you valuable time. Each professional is carefully vetted for
            the precise skills, experience, and expertise you require.
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>02</h5>
          <p className={styles.appProcess__stepText}>
            The right specialist for you
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>03</h5>
          <p className={styles.appProcess__stepText}>
            Aligning goals & communication
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Managing HR & monitoring for long-term success
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Meet the team: Client interview
          </p>
        </div>

        <div className={styles.appProcess__step}>
          <ZoomIcon />
          <h5 className={styles.appProcess__stepTitle}>04</h5>
          <p className={styles.appProcess__stepText}>
            Managing HR & monitoring for long-term success
          </p>
        </div>
      </div> */
}
