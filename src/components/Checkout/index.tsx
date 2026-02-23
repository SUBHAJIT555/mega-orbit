"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { selectCartItems, selectTotalPrice, removeAllItemsFromCart } from "@/redux/features/cart-slice";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteSchema, type QuoteFormData } from "@/lib/schemas";
import Breadcrumb from "../Common/Breadcrumb";
import Billing from "./Billing";

const Checkout = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cartItems = useAppSelector(selectCartItems);
  const total = useAppSelector(selectTotalPrice);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    if (cartItems.length === 0) {
      setError("Your cart is empty. Add items before checkout.");
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      const orderItems = cartItems.map((item) => ({
        name: item.title,
        quantity: item.quantity,
        price: item.discountedPrice,
      }));

      const formData = new FormData();
      formData.append("formType", "quote");
      formData.append("billing_first_name", data.firstName);
      formData.append("billing_last_name", data.lastName);
      formData.append("billing_email", data.email);
      formData.append("billing_phone", data.phone);
      formData.append("billing_address", data.address);
      formData.append("billing_town", data.town);
      formData.append("billing_state", data.state || "");
      formData.append("cart_items", JSON.stringify(orderItems));
      formData.append("cart_total", total.toString());
      formData.append("order_total", total.toString());
      if (data.notes) formData.append("notes", data.notes);

      const res = await fetch("/api/submit.php", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to submit quote request");
      }

      dispatch(removeAllItemsFromCart());
      router.push("/mail-success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <>
      <Breadcrumb title={"Request for Quote"} pages={["request for quote"]} />
      <section className="overflow-x-hidden py-20 bg-[var(--brutal-bg)] border-t-4 border-[var(--brutal-black)]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col lg:flex-row gap-7.5 xl:gap-11">
              {/* checkout left */}
              <div className="lg:max-w-[670px] w-full">
                <Billing register={register} errors={errors} />
                <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box p-4 sm:p-8.5 mt-7.5">
                  <div>
                    <label htmlFor="notes" className="block mb-2.5 font-bold text-[var(--brutal-black)]">
                      Note about your order
                    </label>
                    <textarea
                      {...register("notes")}
                      id="notes"
                      rows={5}
                      placeholder="Note about your order"
                      className="rounded-none border-2 border-[var(--brutal-black)] bg-white font-medium text-[var(--brutal-black)] placeholder:text-[var(--brutal-black)]/50 w-full p-5 outline-none duration-200 focus:shadow-[2px_2px_0_0_var(--brutal-black)]"
                    />
                  </div>
                </div>
              </div>

              {/* checkout right */}
              <div className="max-w-[455px] w-full">
                <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box">
                  <div className="border-b-4 border-[var(--brutal-black)] py-5 px-4 sm:px-8.5">
                    <h3 className="font-black text-xl text-[var(--brutal-black)] uppercase tracking-tight">Your Order</h3>
                  </div>

                  <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
                    <div className="flex items-center justify-between py-5 border-b-2 border-[var(--brutal-black)]">
                      <div>
                        <h4 className="font-bold text-[var(--brutal-black)]">Product</h4>
                      </div>
                      <div>
                        <h4 className="font-bold text-[var(--brutal-black)] text-right">Subtotal</h4>
                      </div>
                    </div>

                    {cartItems.length === 0 ? (
                      <div className="py-5 border-b-2 border-[var(--brutal-black)] text-[var(--brutal-black)] font-medium">
                        Your cart is empty.
                      </div>
                    ) : (
                      cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between py-5 border-b-2 border-[var(--brutal-black)]"
                        >
                          <div>
                            <p className="text-[var(--brutal-black)] font-medium">
                              {item.title} × {item.quantity}
                            </p>
                          </div>
                          <div>
                            <p className="text-[var(--brutal-black)] font-medium text-right">
                              ₹{(item.discountedPrice * item.quantity).toLocaleString('en-IN')}
                            </p>
                          </div>
                        </div>
                      ))
                    )}

                    <div className="flex items-center justify-between pt-5">
                      <div>
                        <p className="font-black text-lg text-[var(--brutal-black)]">Total</p>
                      </div>
                      <div>
                        <p className="font-black text-lg text-[var(--brutal-black)] text-right">
                          ₹{total.toLocaleString('en-IN')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {error && (
                  <p className="mt-4 text-red text-sm font-medium" role="alert">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting || cartItems.length === 0}
                  className="w-full flex justify-center font-black text-[var(--brutal-black)] bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-3 px-6 rounded-none brutal-btn hover:bg-[var(--brutal-cyan)] mt-7.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {submitting ? "Processing…" : "Ask for Quote"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Checkout;
