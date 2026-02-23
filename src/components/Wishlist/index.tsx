"use client";
import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { useDispatch } from "react-redux";
import { useAppSelector, AppDispatch } from "@/redux/store";
import { removeAllItemsFromWishlist } from "@/redux/features/wishlist-slice";
import SingleItem from "./SingleItem";

export const Wishlist = () => {
  const dispatch = useDispatch<AppDispatch>();
  const wishlistItems = useAppSelector((state) => state.wishlistReducer.items);

  const handleClearWishlist = () => {
    dispatch(removeAllItemsFromWishlist());
  };

  return (
    <>
      <Breadcrumb title={"Wishlist"} pages={["Wishlist"]} />
      <section className="overflow-x-hidden py-20 bg-[var(--brutal-bg)] border-t-4 border-[var(--brutal-black)]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5 mb-7.5 p-4 rounded-none border-[3px] border-[var(--brutal-black)] bg-white brutal-box">
            <h2 className="font-black text-[var(--brutal-black)] text-2xl uppercase tracking-tight">Your Wishlist</h2>
            <button
              type="button"
              onClick={handleClearWishlist}
              disabled={wishlistItems.length === 0}
              className="font-bold text-[var(--brutal-black)] border-b-2 border-[var(--brutal-black)] hover:bg-[var(--brutal-yellow)] px-1 -mb-0.5 brutal-btn disabled:opacity-50 disabled:cursor-not-allowed disabled:border-transparent disabled:hover:bg-transparent"
            >
              Clear Wishlist Cart
            </button>
          </div>

          <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box">
            <div className="w-full overflow-x-auto">
              <div className="min-w-[1170px]">
                {/* <!-- table header --> */}
                <div className="flex items-center py-5.5 px-10 border-b-2 border-[var(--brutal-black)] bg-[var(--brutal-bg)]">
                  <div className="min-w-[83px]"></div>
                  <div className="min-w-[387px]">
                    <p className="font-black text-[var(--brutal-black)]">Product</p>
                  </div>

                  <div className="min-w-[205px]">
                    <p className="font-black text-[var(--brutal-black)]">Unit Price</p>
                  </div>

                  <div className="min-w-[265px]">
                    <p className="font-black text-[var(--brutal-black)]">Stock Status</p>
                  </div>

                  <div className="min-w-[150px]">
                    <p className="font-black text-[var(--brutal-black)] text-right">Action</p>
                  </div>
                </div>

                {/* <!-- wish item --> */}
                {wishlistItems.map((item, key) => (
                  <SingleItem item={item} key={key} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
