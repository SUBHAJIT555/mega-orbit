"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";

const HeroCarousal = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="hero-carousel"
    >
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-black text-heading-3 sm:text-heading-1 text-[var(--brutal-cyan)]">
                MEGA
              </span>
              <span className="block text-[var(--brutal-black)] text-sm sm:text-custom-1 sm:leading-[24px] font-black">
                ORBIT
                <br />
                STORE
              </span>
            </div>
            <h1 className="font-black text-[var(--brutal-black)] text-xl sm:text-3xl mb-3">
              Electronics, Stationery, Books & Garments
            </h1>
            <p className="text-[var(--brutal-black)]/80 font-medium">
              Everything you need—gadgets, study supplies, books and fashion. Quality products at great prices for India.
            </p>
            <Link
              href="/shop"
              className="inline-flex font-black text-[var(--brutal-black)] text-custom-sm rounded-none bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-3 px-9 mt-10 brutal-btn"
            >
              GO TO SHOP
            </Link>
          </div>

          <div>
            <Image
              src="/images/HomePageImages/1.webp"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex items-center pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-black text-heading-3 sm:text-heading-1 text-[var(--brutal-yellow)]">
                30%
              </span>
              <span className="block text-[var(--brutal-black)] text-sm sm:text-custom-1 sm:leading-[24px] font-black">
                SALE
                <br />
                OFF
              </span>
            </div>
            <h1 className="font-black text-[var(--brutal-black)] text-xl sm:text-3xl mb-3">
              Electronics, Books, Stationery & More
            </h1>
            <p className="text-[var(--brutal-black)]/80 font-medium">
              Shop electronics, stationery, books, garments and more. Best deals for the Indian market.
            </p>
            <Link
              href="/shop"
              className="inline-flex font-black text-[var(--brutal-black)] rounded-none bg-[var(--brutal-cyan)] border-2 border-[var(--brutal-black)] py-3 px-9 mt-10 brutal-btn"
            >
              GO TO SHOP
            </Link>
          </div>

          <div>
            <Image
              src="/images/HomePageImages/2.webp"
              alt="headphone"
              width={351}
              height={358}
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousal;
