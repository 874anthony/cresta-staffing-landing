import { Inter, Roboto } from "next/font/google";
import Navbar from "@/shared/Navbar";
import Footer from "@/shared/Footer";

import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const robotoSerif = Roboto({
  variable: "--font-roboto-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cresta Staffing",
  description:
    "Cresta Staffing is a staffing agency that helps you find the right job or the right candidate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} ${robotoSerif.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
