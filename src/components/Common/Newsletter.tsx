"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterFormData } from "@/lib/schemas";

const Newsletter = () => {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("formType", "newsletter");
      formData.append("email", data.email);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to subscribe");
      }

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="overflow-hidden py-12">
      <div className="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0">
        <div className="relative z-1 overflow-hidden rounded-none bg-[var(--brutal-yellow)] border-[3px] border-[var(--brutal-black)] brutal-box-lg">
          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 px-6 sm:px-10 xl:px-14 py-12">
            <div className="max-w-[491px] w-full">
              <h2 className="max-w-[399px] text-[var(--brutal-black)] font-black text-lg sm:text-xl xl:text-heading-4 mb-3">
                STAY IN ORBIT — LATEST TRENDS & OFFERS
              </h2>
              <p className="text-[var(--brutal-black)] font-bold">
                Subscribe for new arrivals, exclusive deals and discount codes at Mega Orbit.
              </p>
            </div>
            <div className="max-w-[477px] w-full">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className={`w-full bg-white border-2 ${errors.email ? "border-red" : "border-[var(--brutal-black)]"
                        } outline-none rounded-none py-3 px-5 text-[var(--brutal-black)] font-bold placeholder:text-gray-500`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm font-bold text-red">{errors.email.message}</p>
                    )}
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex justify-center py-3 px-7 text-[var(--brutal-black)] font-black bg-white border-2 border-[var(--brutal-black)] rounded-none brutal-btn disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitting ? "Subscribing..." : success ? "Subscribed!" : "Subscribe"}
                  </button>
                </div>
                {error && <p className="mt-2 text-sm text-red">{error}</p>}
                {success && <p className="mt-2 text-sm text-green">Thank you for subscribing!</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
