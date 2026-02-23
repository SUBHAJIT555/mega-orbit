import About from "@/components/About";

import { Metadata } from "next";
export const metadata: Metadata = {
    title: "About Us | Mega Orbit",
  description: "Learn about Mega Orbit—India's trusted store for electronics, books, stationery, and garments. mega-orbit.com",
  // other metadata
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
