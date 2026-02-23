import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <Link href={`/shop?category=${item.slug}`} className="group flex flex-col items-center">
      <div className="max-w-[130px] w-full h-32.5 rounded-none flex items-center justify-center mb-4 border-[3px] border-[var(--brutal-black)] bg-white my-4 brutal-box group-hover:bg-[var(--brutal-yellow)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:shadow-none transition-all">
        <Image src={item.img} alt="Category" width={82} height={62} />
      </div>
      <div className="flex justify-center">
        <h3 className="inline-block font-black text-center text-[var(--brutal-black)] group-hover:underline">
          {item.title}
        </h3>
      </div>
    </Link>
  );
};

export default SingleItem;
