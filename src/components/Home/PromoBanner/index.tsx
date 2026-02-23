import React from "react";
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="overflow-hidden py-20 bg-[var(--brutal-bg)]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-none py-12.5 lg:py-17.5 xl:py-22.5 px-4 sm:px-7.5 lg:px-14 xl:px-19 mb-7.5 bg-[var(--brutal-cyan)] border-[3px] border-[var(--brutal-black)] brutal-box-lg">
          <div className="max-w-[550px] w-full">
            <span className="block font-bold text-xl text-[var(--brutal-black)]/80 mb-3">
              Electronics, Books, Stationery & Garments
            </span>
            <h2 className="font-black text-xl lg:text-heading-4 xl:text-heading-3 text-[var(--brutal-black)] mb-5">
              UP TO 30% OFF — ELECTRONICS, BOOKS & MORE
            </h2>
            <p className="text-[var(--brutal-black)] font-medium">
              Shop mobile accessories, smart gadgets, computer accessories, home
              electronics, books, stationery, and fashion for men, women & kids. Quality
              products at great prices, delivered across India.
            </p>
            <a href="/shop" className="inline-flex font-black text-[var(--brutal-black)] bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-[11px] px-9.5 rounded-none mt-7.5 brutal-btn">
              SHOP NOW
            </a>
          </div>

          <Image
            src="/images/HomePageImages/6.webp"
            alt="promo img"
            className="absolute bottom-0 right-4 lg:right-26 -z-1"
            width={274}
            height={350}
          />
        </div>

        <div className="grid gap-7.5 grid-cols-1 lg:grid-cols-2">
          <div className="relative z-1 overflow-hidden rounded-none bg-[var(--brutal-yellow)] border-[3px] border-[var(--brutal-black)] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 brutal-box">
            <Image src="/images/HomePageImages/7.webp" alt="promo img" className="absolute top-1/2 -translate-y-1/2 left-3 sm:left-10 -z-1 opacity-90" width={241} height={241} />
            <div className="text-right">
              <span className="block text-lg font-bold text-[var(--brutal-black)] mb-1.5">Books & Stationery</span>
              <h2 className="font-black text-xl lg:text-heading-4 text-[var(--brutal-black)] mb-2.5">Office Essentials</h2>
              <p className="font-black text-custom-1 text-[var(--brutal-black)]">Flat 20% off — great value</p>
              <a href="/shop" className="inline-flex font-black text-custom-sm text-[var(--brutal-black)] bg-white border-2 border-[var(--brutal-black)] py-2.5 px-8.5 rounded-none mt-9 brutal-btn">SHOP NOW</a>
            </div>
          </div>
          <div className="relative z-1 overflow-hidden rounded-none bg-[var(--brutal-cyan)] border-[3px] border-[var(--brutal-black)] py-10 xl:py-16 px-4 sm:px-7.5 xl:px-10 brutal-box">
            <Image src="/images/HomePageImages/5.webp" alt="promo img" className="absolute top-1/2 -translate-y-1/2 right-3 sm:right-8.5 -z-1 opacity-90" width={200} height={200} />
            <div>
              <span className="block text-lg font-bold text-[var(--brutal-black)] mb-1.5">Men&apos;s, Women&apos;s & Kids&apos; Ware</span>
              <h2 className="font-black text-xl lg:text-heading-4 text-[var(--brutal-black)] mb-2.5">Up to <span className="text-[var(--brutal-yellow)]">40%</span> off</h2>
              <p className="max-w-[285px] text-custom-sm font-bold text-[var(--brutal-black)]/90">Fresh styles in garments for the whole family. Quality fabric, great fits at honest prices.</p>
              <a href="/shop" className="inline-flex font-black text-custom-sm text-[var(--brutal-black)] bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-2.5 px-8.5 rounded-none mt-7.5 brutal-btn">SHOP NOW</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
