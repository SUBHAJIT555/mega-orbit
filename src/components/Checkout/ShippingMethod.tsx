import React, { useState } from "react";
import Image from "next/image";

const ShippingMethod = () => {
  const [shippingMethod, setShippingMethod] = useState("free");
  return (
    <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box mt-7.5">
      <div className="border-b-4 border-[var(--brutal-black)] py-5 px-4 sm:px-8.5">
        <h3 className="font-black text-xl text-[var(--brutal-black)] uppercase tracking-tight">Shipping Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-4">
          <label
            htmlFor="free"
            className="flex cursor-pointer select-none items-center gap-3.5 font-bold text-[var(--brutal-black)]"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="free"
                id="free"
                className="sr-only"
                onChange={() => setShippingMethod("free")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-none border-2 ${
                  shippingMethod === "free"
                    ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)]"
                    : "border-[var(--brutal-black)] bg-white"
                }`}
              ></div>
            </div>
            Free Shipping
          </label>

          <label
            htmlFor="fedex"
            className="flex cursor-pointer select-none items-center gap-3.5"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="fedex"
                id="fedex"
                className="sr-only"
                onChange={() => setShippingMethod("fedex")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-none border-2 ${
                  shippingMethod === "fedex"
                    ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)]"
                    : "border-[var(--brutal-black)] bg-white"
                }`}
              ></div>
            </div>

            <div className={`rounded-none border-2 py-3.5 px-5 ease-out duration-200 ${
              shippingMethod === "fedex"
                ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)] shadow-[2px_2px_0_0_var(--brutal-black)]"
                : "border-[var(--brutal-black)] bg-white hover:bg-[var(--brutal-bg)]"
            }`}>
              <div className="flex items-center">
                <div className="pr-4">
                  <Image
                    src="/images/checkout/fedex.svg"
                    alt="fedex"
                    width={64}
                    height={18}
                  />
                </div>

                <div className="border-l-2 border-[var(--brutal-black)] pl-4">
                  <p className="font-black text-[var(--brutal-black)]">₹10.99</p>
                  <p className="text-custom-xs font-medium text-[var(--brutal-black)]">Standard Shipping</p>
                </div>
              </div>
            </div>
          </label>

          <label
            htmlFor="dhl"
            className="flex cursor-pointer select-none items-center gap-3.5"
          >
            <div className="relative">
              <input
                type="checkbox"
                name="dhl"
                id="dhl"
                className="sr-only"
                onChange={() => setShippingMethod("dhl")}
              />
              <div
                className={`flex h-4 w-4 items-center justify-center rounded-none border-2 ${
                  shippingMethod === "dhl"
                    ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)]"
                    : "border-[var(--brutal-black)] bg-white"
                }`}
              ></div>
            </div>

            <div className={`rounded-none border-2 py-3.5 px-5 ease-out duration-200 ${
              shippingMethod === "dhl"
                ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)] shadow-[2px_2px_0_0_var(--brutal-black)]"
                : "border-[var(--brutal-black)] bg-white hover:bg-[var(--brutal-bg)]"
            }`}>
              <div className="flex items-center">
                <div className="pr-4">
                  <Image
                    src="/images/checkout/dhl.svg"
                    alt="dhl"
                    width={64}
                    height={20}
                  />
                </div>

                <div className="border-l-2 border-[var(--brutal-black)] pl-4">
                  <p className="font-black text-[var(--brutal-black)]">₹12.50</p>
                  <p className="text-custom-xs font-medium text-[var(--brutal-black)]">Standard Shipping</p>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ShippingMethod;
