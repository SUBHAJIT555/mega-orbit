import React from "react";
import SingleItem from "./SingleItem";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface BestSellerProps {
  products: Product[];
}

const BestSeller = ({ products }: BestSellerProps) => {
  return (
    <section className="overflow-hidden bg-[var(--brutal-bg)] py-17.5 border-t-4 border-[var(--brutal-black)]">
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
        <div className="mb-10 flex items-center justify-between p-4 rounded-none border-[3px] border-[var(--brutal-black)] bg-white brutal-box">
          <div>
            <span className="flex items-center gap-2.5 font-bold text-[var(--brutal-black)] mb-1.5">
              <Image src="/images/icons/icon-07.svg" alt="icon" width={17} height={17} />
              THIS MONTH
            </span>
            <h2 className="font-black text-xl xl:text-heading-5 text-[var(--brutal-black)] uppercase tracking-tight">BEST SELLERS</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7.5">
          {products.map((item, key) => (
            <SingleItem item={item} key={key} />
          ))}
        </div>

        <div className="text-center mt-12.5">
          <Link
            href="/shop"
            className="inline-flex font-black text-custom-sm py-3 px-7 sm:px-12.5 rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-yellow)] text-[var(--brutal-black)] brutal-btn uppercase tracking-wide"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestSeller;
