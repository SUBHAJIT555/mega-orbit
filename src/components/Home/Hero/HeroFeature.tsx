import React from "react";
import Image from "next/image";

const featureData = [
  {
    img: "/images/icons/icon-01.svg",
    title: "Free Shipping",
    description: "On orders above ₹499",
  },
  {
    img: "/images/icons/icon-02.svg",
    title: "Easy Returns",
    description: "7-day return policy",
  },
  {
    img: "/images/icons/icon-03.svg",
    title: "100% Secure Payments",
    description: "UPI, Cards & more",
  },
  {
    img: "/images/icons/icon-04.svg",
    title: "24/7 Support",
    description: "All across India",
  },
];

const HeroFeature = () => {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 xl:px-0">
      <div className="flex flex-wrap items-center justify-center gap-7.5 xl:gap-12.5 mt-10 py-6 border-t-4 border-[var(--brutal-black)]">
        {featureData.map((item, key) => (
          <div className="flex items-center gap-4 p-4 rounded-none border-2 border-[var(--brutal-black)] bg-white brutal-box" key={key}>
            <span className="flex items-center justify-center w-12 h-12 rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-yellow)]">
              <Image src={item.img} alt="icons" width={28} height={28} />
            </span>
            <div>
              <h3 className="font-black text-base text-[var(--brutal-black)]">{item.title}</h3>
              <p className="text-sm font-bold text-[var(--brutal-black)]/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroFeature;
