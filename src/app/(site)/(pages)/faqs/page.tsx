import FAQs from "@/components/FAQs";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "FAQs | Mega Orbit",
  description: "Frequently asked questions about Mega Orbit—delivery, payments, returns, and more.",
  // other metadata
};

const FAQsPage = () => {
  return (
    <main>
      <FAQs />
    </main>
  );
};

export default FAQsPage;
