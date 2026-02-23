import React from "react";
import Image from "next/image";

const PAYMENT_OPTIONS = [
  { id: "cash", value: "cash", label: "Cash on delivery", icon: "/images/checkout/cash.svg", iconSize: { w: 21, h: 21 } },
  { id: "upi", value: "upi", label: "UPI", icon: "/images/checkout/bank.svg", iconSize: { w: 29, h: 12 } },
  { id: "online_banking", value: "online_banking", label: "Online Banking", icon: "/images/checkout/bank.svg", iconSize: { w: 29, h: 12 } },
] as const;

type PaymentMethodProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const PaymentMethod = ({ value = "cash", onChange }: PaymentMethodProps) => {
  return (
    <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box mt-7.5">
      <div className="border-b-4 border-[var(--brutal-black)] py-5 px-4 sm:px-8.5">
        <h3 className="font-black text-xl text-[var(--brutal-black)] uppercase tracking-tight">Payment Method</h3>
      </div>

      <div className="p-4 sm:p-8.5">
        <div className="flex flex-col gap-3">
          {PAYMENT_OPTIONS.map((opt) => (
            <label
              key={opt.id}
              htmlFor={opt.id}
              className="flex cursor-pointer select-none items-center gap-4"
            >
              <div className="relative">
                <input
                  type="radio"
                  name="paymentMethod"
                  id={opt.id}
                  value={opt.value}
                  className="sr-only"
                  checked={value === opt.value}
                  onChange={() => onChange?.(opt.value)}
                />
                <div
                  className={`flex h-4 w-4 items-center justify-center rounded-none border-2 ${
                    value === opt.value ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)]" : "border-[var(--brutal-black)] bg-white"
                  }`}
                />
              </div>

              <div
                className={`rounded-none border-2 py-3.5 px-5 ease-out duration-200 min-w-[240px] ${
                  value === opt.value
                    ? "border-[var(--brutal-black)] bg-[var(--brutal-yellow)] shadow-[2px_2px_0_0_var(--brutal-black)]"
                    : "border-[var(--brutal-black)] bg-white hover:bg-[var(--brutal-bg)]"
                }`}
              >
                <div className="flex items-center">
                  <div className="pr-2.5">
                    <Image src={opt.icon} alt={opt.label} width={opt.iconSize.w} height={opt.iconSize.h} />
                  </div>
                  <div className="border-l-2 border-[var(--brutal-black)] pl-2.5">
                    <p className="font-bold text-[var(--brutal-black)]">{opt.label}</p>
                  </div>
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
