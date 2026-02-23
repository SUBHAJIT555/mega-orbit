import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useAppSelector } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const OrderSummary = () => {
  const cartItems = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className="lg:max-w-[455px] w-full">
      {/* <!-- order list box --> */}
      <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box">
        <div className="border-b-2 border-[var(--brutal-black)] py-5 px-4 sm:px-8.5 bg-[var(--brutal-bg)]">
          <h3 className="font-black text-xl text-[var(--brutal-black)] uppercase tracking-tight">Order Summary</h3>
        </div>

        <div className="pt-2.5 pb-8.5 px-4 sm:px-8.5">
          {/* <!-- title --> */}
          <div className="flex items-center justify-between py-5 border-b-2 border-[var(--brutal-black)]">
            <div>
              <h4 className="font-black text-[var(--brutal-black)]">Product</h4>
            </div>
            <div>
              <h4 className="font-black text-[var(--brutal-black)] text-right">Subtotal</h4>
            </div>
          </div>

          {/* <!-- product item --> */}
          {cartItems.map((item, key) => (
            <div key={key} className="flex items-center justify-between py-5 border-b-2 border-[var(--brutal-black)]/30">
              <div>
                <p className="font-medium text-[var(--brutal-black)]">{item.title}</p>
              </div>
              <div>
                <p className="font-bold text-[var(--brutal-black)] text-right">
                  ₹{(item.discountedPrice * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
            </div>
          ))}

          {/* <!-- total --> */}
          <div className="flex items-center justify-between pt-5 border-t-2 border-[var(--brutal-black)]">
            <div>
              <p className="font-black text-lg text-[var(--brutal-black)]">Total</p>
            </div>
            <div>
              <p className="font-black text-lg text-[var(--brutal-black)] text-right">
                ₹{totalPrice.toLocaleString('en-IN')}
              </p>
            </div>
          </div>

          {/* <!-- checkout button --> */}
          <Link
            href="/checkout"
            className="w-full flex justify-center font-black text-[var(--brutal-black)] bg-[var(--brutal-yellow)] border-2 border-[var(--brutal-black)] py-3 px-6 rounded-none brutal-btn hover:bg-[var(--brutal-cyan)] mt-7.5"
          >
            Process to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
