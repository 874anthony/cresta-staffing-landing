"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";

import styles from "./WeeklyJobs.module.scss";

const jobs = [
  [
    {
      title: "Estimator",
      location: "Remote (Colombia)",
      requirements: [
        "Bachelor's degree in Electrical Engineering, Electronics, Telecommunications (related fields).",
        "Accurate LV drawing interpretation for quantity takeoffs.",
        "Comprehensive cost estimation for LV residential/commercial projects.",
        "Proficient in AutoCAD, BlueBeam, QuoteWerks, and PROCORE for LV project workflows.",
      ],
    },
    {
      title: "Project Coordinator",
      location: "Remote (Colombia)",
      requirements: [
        "Bachelor's degree in Mechanical Engineering, Architecture, Civil Engineering- (related fields).",
        "Reviewing MEP drawings for constructability and code compliance (NYC).",
        "Coordinating MEP drawing accuracy with contractors and internal teams.",
        "Proficient in CAD/BIM (AutoCAD, Revit) and clash detection (Navisworks, BIM 360).",
      ],
    },
    {
      title: "Project Manager",
      location: "Remote (Colombia)",
      requirements: [
        "Bachelor's degree in Civil Engineering or Architecture (related fields).",
        "Evaluates subcontractor bids and provides clear selection reports.",
        "Ensures accurate project documentation and bid records.",
        "Excel proficiency; CAD/BIM/Revit and project management software knowledge.",
      ],
    },
  ],
];

export default function WeeklyJobs() {
  const isMobile = useIsMobile(475);
  const slides = isMobile ? jobs.flat().map((benefit) => [benefit]) : jobs;

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
    <section className={styles.weekly__jobs} id="weekly-jobs">
      <h3 className={styles.weekly__jobsTitle}>Jobs of the week</h3>

      <p className={styles.weekly__subCaption}>
        Explore our offers and stay updated for more!
      </p>

      {/* Carousel Container */}
      <div className={styles.carouselContainer} {...swipeHandlers}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className={styles.carouselSlide}>
              {slide.map((job, jobIndex) => (
                <div key={jobIndex} className={styles.weekly__jobCard}>
                  <h4 className={styles.weekly__jobCardTitle}>{job.title}</h4>

                  {job.subtitle && (
                    <>
                      <span className={styles.weekly__jobCardSubtitle}>
                        {job.subtitle}
                      </span>
                      <span className={styles.weekly__jobCardSubtitle}>|</span>
                    </>
                  )}

                  <span className={styles.weekly__jobCardSubtitle}>
                    {job.location}
                  </span>

                  <ul className={styles.weekly__jobCardList}>
                    {job.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>

                  <div className={styles.weekly__jobCardFooter}>
                    <Button
                      variant="secondary"
                      style={{
                        fontWeight: "bold",
                      }}
                      onClick={() => {
                        window.open(
                          "https://www.linkedin.com/company/crestastaffing/jobs/?viewAsMember=true",
                          "_blank",
                          "noopener noreferrer"
                        );
                      }}
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Dots */}
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
