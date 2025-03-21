"use client";

import { useCallback } from "react";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

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
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={() => router.push("/")}>
        <img src="/assets/cresta_logo.png" alt="Cresta Logo" />
      </div>

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
            <NextLink href="/about-us">
              About{" "}
              <span>
                <ChevronDown />
              </span>
            </NextLink>

            <ul className={styles.nav__dropdown}>
              <li>
                <a href="#">Service 1</a>
              </li>
              <li>
                <a href="#">Service 2</a>
              </li>
              <li>
                <a href="#">Service 3</a>
              </li>
            </ul>
          </li>

          <li className={styles.nav__item}>
            <NextLink href="/blog">Blog</NextLink>
          </li>

          <li className={styles.nav__item}>
            <NextLink href="/faq">FAQ</NextLink>
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
    </header>
  );
}
