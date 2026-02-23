import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { QuoteFormData } from "@/lib/schemas";

interface BillingProps {
  register: UseFormRegister<QuoteFormData>;
  errors: FieldErrors<QuoteFormData>;
}

const Billing = ({ register, errors }: BillingProps) => {
  return (
    <div className="mt-9">
      <h2 className="font-black text-[var(--brutal-black)] text-xl sm:text-2xl uppercase tracking-tight mb-5.5">
        Billing details
      </h2>

      <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box p-4 sm:p-8.5">
        <div className="flex flex-col lg:flex-row gap-5 sm:gap-8 mb-5">
          <div className="w-full">
            <label htmlFor="firstName" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
              First Name <span className="text-red">*</span>
            </label>

            <input
              type="text"
              {...register("firstName")}
              id="firstName"
              placeholder="First name"
              className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.firstName ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-full">
            <label htmlFor="lastName" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
              Last Name <span className="text-red">*</span>
            </label>

            <input
              type="text"
              {...register("lastName")}
              id="lastName"
              placeholder="Last name"
              className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.lastName ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="mb-5">
          <label htmlFor="address" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            Street Address
            <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("address")}
            id="address"
            placeholder="Street address"
            className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.address ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
          />
          {errors.address && (
            <p className="mt-1 text-sm text-red">{errors.address.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="town" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            Town/ City <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("town")}
            id="town"
            placeholder="Town/City"
            className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.town ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
          />
          {errors.town && (
            <p className="mt-1 text-sm text-red">{errors.town.message}</p>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="state" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            State/ Country
          </label>

          <input
            type="text"
            {...register("state")}
            id="state"
            placeholder="State/Country"
            className="rounded-none border-2 border-[var(--brutal-black)] bg-white font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 w-full py-2.5 px-5 outline-none duration-200 focus:shadow-[2px_2px_0_0_var(--brutal-black)]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="postcode" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            Postcode/ ZIP
          </label>

          <input
            type="text"
            {...register("postcode")}
            id="postcode"
            placeholder="Postcode/ZIP"
            className="rounded-none border-2 border-[var(--brutal-black)] bg-white font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 w-full py-2.5 px-5 outline-none duration-200 focus:shadow-[2px_2px_0_0_var(--brutal-black)]"
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            Email <span className="text-red">*</span>
          </label>

          <input
            type="email"
            {...register("email")}
            id="email"
            placeholder="Email"
            className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.email ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-5.5">
          <label htmlFor="phone" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
            Phone <span className="text-red">*</span>
          </label>

          <input
            type="text"
            {...register("phone")}
            id="phone"
            placeholder="Phone"
            className={`rounded-none border-2 w-full py-2.5 px-5 outline-none duration-200 font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 bg-white ${errors.phone ? "border-red" : "border-[var(--brutal-black)]"} focus:shadow-[2px_2px_0_0_var(--brutal-black)]`}
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red">{errors.phone.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;
