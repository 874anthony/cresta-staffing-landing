"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();

  const initialSlides = [
    [
      {
        title: "Drafter",
        text: "We deliver accurate, code-compliant CAD drawings that align with your goals. Our skilled drafters seamlessly translate your specifications into detailed technical plans, ensuring every standard and regulation is met.",
        link: "/services/drafter",
      },
      {
        title: "3D Renderer",
        text: "Masters of their craft, they bring not just technical proficiency but also a creative spark to every project, delivering stunning visuals that capture the true essence of your design.",
        link: "/services/3d-renderer",
      },
      {
        title: "BIM Modeling",
        text: "Our BIM experts use Revit and top software to create precise, coordinated digital models of buildings and infrastructure. With deep expertise in architectural, structural, and MEP systems, they ensure accuracy in every project detail.",
        link: "/services/bim",
      },
      {
        title: "Construction Project Manager",
        text: "Our skilled construction project managers keep every stakeholder—clients, architects, engineers, and contractors—aligned through clear communication and strategic coordination. Build with confidence. Deliver with precision!",
        link: "/services/construction",
      },
    ],
    [
      {
        title: "Design Drafter & Documentation",
        text: "Our expert drafters deliver precise CAD and Revit drawings for architectural, structural, and mechanical projects. From floor plans to structural layouts, they ensure accuracy, compliance, and clear design intent.",
        link: "/services/drafter-documentation",
      },
      {
        title: "Estimator",
        text: "Our expert estimators deliver precise, reliable cost estimates by interpreting complex blueprints and staying updated on market costs.",
        link: "/services/estimator",
      },
      {
        title: "Expediator",
        text: "Our skilled architects excel in construction administration, building codes, and permit processes. They have the expertise to review and manage complex architectural drawings with precision while ensuring thorough documentation.",
        link: "/services/expeditor",
      },
      {
        title: "Executive Assistant",
        text: "They excel at coordinating multiple teams and ensuring seamless communication while maintaining precise oversight of administrative processes.",
        link: "/services/assistant",
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
                      onClick={() => router.push(card.link || "/services")}
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
