import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import Backdrop from "@/components/backdrop/Backdrop";
import MotionRuntime from "@/components/motion/MotionRuntime";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.origin),
  title: {
    default: "Pathways Within - Wisdom and Wellness - New York Therapy",
    template: "%s — Pathways Within",
  },
  description:
    "At Pathways Within, we believe true well-being is about more than just mental health or physical appearance—it’s about caring for yourself as whole person.",
  icons: { icon: "/img/logo-192.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <Backdrop />
        <Header />
        <main id="main" className="page">
          {children}
        </main>
        <Footer />
        <MotionRuntime />
      </body>
    </html>
  );
}
