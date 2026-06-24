import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Logo from "@/components/Common/Logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden bg-[var(--brutal-bg)] text-[var(--brutal-black)] border-t-4 border-[var(--brutal-black)]">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <div className="mb-7.5">
              <Logo textClassName="text-2xl font-black tracking-tight text-[var(--brutal-black)]" />
            </div>
            <p className="text-[var(--brutal-black)]/80 mb-7.5 text-sm leading-relaxed font-medium">
              {siteConfig.brand.name} is India&apos;s trusted store for electronics, books, stationery, and garments.
              Honest prices, fast delivery. Shop at {siteConfig.brand.domain}.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-lg font-black text-[var(--brutal-black)]">Quick Links</h2>
            <ul className="flex flex-col gap-3.5">
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/">Home</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/shop">Shop</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/about">About</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/contact">Contact</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/cart">Cart</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/faqs">FAQ</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-lg font-black text-[var(--brutal-black)]">Legal</h2>
            <ul className="flex flex-col gap-3.5">
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/cookie-policy">Cookie Policy</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/terms-of-use">Terms and Conditions</Link></li>
              <li><Link className="font-bold text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)] hover:underline" href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-lg font-black text-[var(--brutal-black)] lg:text-right">Contact</h2>
            <div className="flex flex-col gap-4 lg:text-right">
              <p className="text-[var(--brutal-black)] font-medium text-sm">
                {siteConfig.brand.address.street}<br />
                {siteConfig.brand.address.city}, {siteConfig.brand.address.state} {siteConfig.brand.address.zip}
              </p>
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="flex-shrink-0 w-10 h-10 rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-yellow)] flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--brutal-black)]">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                  </svg>
                </span>
                <span className="font-bold text-[var(--brutal-black)]">{siteConfig.brand.address.location}</span>
              </div>
              <div className="flex items-start gap-3 lg:justify-end">
                <span className="flex-shrink-0 w-10 h-10 rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-yellow)] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="text-[var(--brutal-black)]" fill="currentColor">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919Z" />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="font-bold text-[var(--brutal-black)]">{siteConfig.brand.phone}</span>
                  <span className="text-sm font-medium text-[var(--brutal-black)]/70">{siteConfig.brand.businessHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 xl:py-7.5 bg-[var(--brutal-yellow)] border-t-4 border-[var(--brutal-black)]">
        <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex gap-5 flex-wrap items-center justify-between">
            <p className="font-black text-sm text-[var(--brutal-black)]">
              &copy; {year} {siteConfig.brand.name.toUpperCase()} ({siteConfig.brand.domain}). All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <p className="font-bold text-sm text-[var(--brutal-black)]">We Accept:</p>
              <div className="flex flex-wrap items-center gap-6">
                <p className="cursor-pointer hover:scale-105 transition-transform" aria-label="payment system with visa card">
                  <Image src="/images/payment/payment-01.svg" alt="visa card" width={66} height={22} />
                </p>
                <p className="cursor-pointer opacity-80 hover:opacity-100" aria-label="payment system with paypal">
                  <Image src="/images/payment/payment-02.svg" alt="paypal" width={18} height={21} />
                </p>
                <p className="cursor-pointer opacity-80 hover:opacity-100" aria-label="payment system with master card">
                  <Image src="/images/payment/payment-03.svg" alt="master card" width={33} height={24} />
                </p>
                <p className="cursor-pointer opacity-80 hover:opacity-100" aria-label="payment system with apple pay">
                  <Image src="/images/payment/payment-04.svg" alt="apple pay" width={52.94} height={22} />
                </p>
                <p className="cursor-pointer opacity-80 hover:opacity-100" aria-label="payment system with google pay">
                  <Image src="/images/payment/payment-05.svg" alt="google pay" width={56} height={22} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
