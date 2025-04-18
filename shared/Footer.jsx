"use client";
import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useIsMobile from "@/hooks/useIsMobile";

import Button from "@/components/Button";
import styles from "./Footer.module.scss";
import { LinkedinIcon } from "@/components/icons/socials/LinkedinIcon";
import { InstagramIcon } from "@/components/icons/socials/InstagramIcon";

const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
      clipRule="evenodd"
    />
  </svg>
);

const MailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    viewBox="0 0 24 24"
    fill="currentColor"
    className="size-6"
  >
    <path
      fillRule="evenodd"
      d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
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

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isMobile = useIsMobile();

  const isMobileAndServicesPage = isMobile && pathname === "/services";

  return (
    <footer
      className={styles.footer}
      style={{
        paddingTop: isMobileAndServicesPage ? "3rem" : "6rem",
      }}
    >
      <div className={styles.footer__logo}>
        <img src="/assets/cresta_logo.png" alt="Cresta Logo" />

        <div className={styles.footer__cta}>
          <p>Let&apos;s talk today</p>

          <Button
            variant="primary"
            size="large"
            style={{
              fontSize: isMobile ? "0.85rem" : "1.125rem",
              padding: isMobile ? "0.5rem 1.6rem" : "0.75rem 1.5rem",
            }}
            onClick={() => router.push("/contact")}
          >
            Hire top talent
          </Button>
        </div>
      </div>

      <div className={styles.footer__nav}>
        <h3>Services</h3>

        <h3>Contact Us</h3>

        <h3>Quick Links</h3>

        <h3>Follow Us</h3>

        <ul className={styles.footer__navLinkList}>
          {navigationData.map((item) => (
            <li key={item.slug}>
              <NextLink href={`/services/${item.slug}`}>{item.title}</NextLink>
            </li>
          ))}
        </ul>

        <ul className={styles.footer__navLinkList}>
          <li style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <PhoneIcon />
            <a href="#">+1 (917) 300-8383</a>
          </li>

          <li
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            <MailIcon />
            <a href="mailto:office@crestastaffing.com">
              office@crestastaffing.com
            </a>
          </li>
          <li style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
            <LocationIcon />
            <a href="#">New York City, NY</a>
          </li>
        </ul>

        <ul className={styles.footer__navLinkList}>
          <li>
            <NextLink href="/">Home</NextLink>
          </li>
          <li>
            <NextLink href="/about-us">About</NextLink>
          </li>
          <li>
            <NextLink href="/services">Services</NextLink>
          </li>
          <li>
            <NextLink href="/find-a-job">Find a job</NextLink>
          </li>

          <li>
            <NextLink href="/blog">Blog</NextLink>
          </li>

          <li>
            <NextLink href="/faq">FAQ</NextLink>
          </li>
        </ul>

        <ul
          className={`${styles.footer__navLinkList} ${styles.footer__social}`}
        >
          <li>
            <a
              href="https://www.linkedin.com/company/crestastaffing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </li>
          <li>
            <a href="#">
              <InstagramIcon />
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.footer__terms}>
        <hr />

        <div className={styles.footer__terms__content}>
          <p>
            ©{new Date().getFullYear() + " "}
            Cresta : Construction Resources and Staffing Agency All Rights
            Reserved.
          </p>

          <ul className={styles.footer__terms__links}>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Services</a>
          </ul>
        </div>
      </div>
    </footer>
  );
}
