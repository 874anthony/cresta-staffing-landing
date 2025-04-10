"use client";
import { useEffect, useState, useRef } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";
import styles from "./Navbar.module.scss";

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const navigationData = [
  {
    title: "3D Renderer",
    slug: "3d-renderer",
  },
  {
    title: "Estimator",
    slug: "estimator",
  },
  {
    title: "BIM Modelling",
    slug: "bim",
  },
  {
    title: "Construction Project Manager",
    slug: "construction",
  },
  {
    title: "Design Drafter & Documentation",
    slug: "drafter-documentation",
  },
  {
    title: "Drafter",
    slug: "drafter",
  },
  {
    title: "Project Coordinator",
    slug: "project-coordinator",
  },
  {
    title: "Executive Assistant",
    slug: "assistant",
  },
];

export default function Navbar() {
  const [showServices, setShowServices] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const checkboxRef = useRef(null);

  const isMobile = useIsMobile(475);

  useEffect(() => {
    if (isMobile && checkboxRef.current && checkboxRef.current.checked) {
      checkboxRef.current.checked = false;
    }
  }, [pathname]);

  // Toggle the services menu and prevent default navigation
  const handleServicesToggle = (e) => {
    e.preventDefault();
    setShowServices((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <img src="/assets/cresta_logo.png" alt="Cresta Logo" />
      </div>

      {!isMobile && (
        <nav className={styles.nav}>
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <NextLink href="/services">
                Services{" "}
                <span>
                  <ChevronDown />
                </span>
              </NextLink>

              <ul className={styles.nav__dropdown}>
                {navigationData.map((item) => (
                  <li key={item.slug}>
                    <NextLink href={`/services/${item.slug}`}>
                      {item.title}
                    </NextLink>
                  </li>
                ))}
              </ul>
            </li>

            <li className={styles.nav__item}>
              <NextLink href="/about-us">About</NextLink>
            </li>

            <li className={styles.nav__item}>
              <NextLink href="/blog">Blog</NextLink>
            </li>

            <li className={styles.nav__item}>
              <NextLink href="/faq">FAQ</NextLink>
            </li>

            <li className={styles.nav__item}>
              <NextLink href="/contact">Contact Us</NextLink>
            </li>
          </ul>

          <div className={styles.nav__cta}>
            <Button
              variant="secondary"
              fontWeight="bold"
              onClick={() => {
                router.push("/find-a-job");
              }}
            >
              Find a job
            </Button>
            <Button
              variant="primary"
              fontWeight="bold"
              onClick={() => {
                router.push("/contact");
              }}
            >
              Get Expert Consultation
            </Button>
          </div>
        </nav>
      )}

      {isMobile && (
        <div className={styles.navigation}>
          <input
            type="checkbox"
            className={styles.navigation__checkbox}
            id="navi-toggle"
            ref={checkboxRef}
          />

          <label htmlFor="navi-toggle" className={styles.navigation__button}>
            <span className={styles.navigation__icon}>&nbsp;</span>
          </label>

          <div className={styles.navigation__background}>&nbsp;</div>

          <nav className={styles.navigation__nav}>
            <ul className={styles.navigation__list}>
              {showServices ? (
                // Render services submenu
                <>
                  <li className={styles.navigation__item}>
                    <NextLink
                      className={styles.navigation__link}
                      href="/services"
                      style={{
                        fontSize: "1.8rem",
                      }}
                    >
                      All
                    </NextLink>
                  </li>

                  {navigationData.map((item) => (
                    <li key={item.slug} className={styles.navigation__item}>
                      <NextLink
                        className={styles.navigation__link}
                        href={`/services/${item.slug}`}
                        style={{
                          fontSize: "1.5rem",
                        }}
                      >
                        {item.title}
                      </NextLink>
                    </li>
                  ))}
                  {/* Back option to return to the original navigation */}
                  <li className={styles.navigation__item}>
                    <button
                      className={styles.navigation__linkButton}
                      onClick={() => setShowServices(false)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </button>
                  </li>
                </>
              ) : (
                // Render default navigation
                <>
                  <li className={styles.navigation__item}>
                    <NextLink className={styles.navigation__link} href="/">
                      Home
                    </NextLink>
                  </li>

                  <li className={styles.navigation__item}>
                    {/* Use button behavior for Services item */}
                    <button
                      className={styles.navigation__linkButton}
                      onClick={handleServicesToggle}
                    >
                      Services
                    </button>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink
                      className={styles.navigation__link}
                      href="/about-us"
                    >
                      About
                    </NextLink>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink className={styles.navigation__link} href="/blog">
                      Blog
                    </NextLink>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink className={styles.navigation__link} href="/faq">
                      FAQ
                    </NextLink>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink
                      className={styles.navigation__link}
                      href="/contact"
                    >
                      Contact Us
                    </NextLink>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink
                      className={styles.navigation__link}
                      href="/find-a-job"
                    >
                      Find a Job
                    </NextLink>
                  </li>
                  <li className={styles.navigation__item}>
                    <NextLink
                      className={styles.navigation__link}
                      href="/contact"
                    >
                      Get Expert Consultation
                    </NextLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
