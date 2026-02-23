import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroFeature from "./HeroFeature";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-10 lg:pb-12.5 xl:pb-15 pt-57.5 sm:pt-45 lg:pt-30 xl:pt-51.5 bg-[var(--brutal-bg)]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap gap-5">
          <div className="xl:max-w-[757px] w-full">
            <div className="relative z-1 rounded-none bg-white border-[3px] border-[var(--brutal-black)] overflow-hidden brutal-box-lg">
              {/* <!-- bg shapes --> */}
              <Image
                src="/images/hero/hero-bg.png"
                alt="hero bg shapes"
                className="absolute right-0 bottom-0 -z-1"
                width={534}
                height={520}
              />

              <HeroCarousel />
            </div>
          </div>

          <div className="xl:max-w-[393px] w-full">
            <div className="flex flex-col sm:flex-row xl:flex-col gap-5">
              <div className="w-full relative rounded-none bg-[var(--brutal-yellow)] border-[3px] border-[var(--brutal-black)] p-4 sm:p-7.5 brutal-box hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-black text-[var(--brutal-black)] text-xl mb-20">
                      <a href="/shop" className="hover:underline"> Electronics & Gadgets </a>
                    </h2>
                    <div>
                      <p className="font-bold text-[var(--brutal-black)]/80 text-custom-sm mb-1.5">great value</p>
                      <span className="font-black text-heading-5 text-[var(--brutal-black)]">From ₹499</span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/HomePageImages/3.webp"
                      alt="electronics"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full relative rounded-none bg-[var(--brutal-cyan)] border-[3px] border-[var(--brutal-black)] p-4 sm:p-7.5 brutal-box hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
                <div className="flex items-center gap-14">
                  <div>
                    <h2 className="max-w-[153px] font-black text-[var(--brutal-black)] text-xl mb-20">
                      <a href="/shop" className="hover:underline"> Get Many More Offers </a>
                    </h2>
                    <div>
                      <p className="font-bold text-[var(--brutal-black)]/80 text-custom-sm mb-1.5">great value</p>
                      <span className="font-black text-heading-5 text-[var(--brutal-black)]">From ₹99</span>
                    </div>
                  </div>

                  <div>
                    <Image
                      src="/images/HomePageImages/4.webp"
                      alt="books stationery garments"
                      width={123}
                      height={161}
                    />
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>

      {/* <!-- Hero features --> */}
      <HeroFeature />
    </section>
  );
};

export default Hero;
