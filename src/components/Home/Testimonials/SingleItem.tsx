import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="h-full flex flex-col rounded-none ">
      <div className="flex items-center gap-1  shrink-0">
        {[...Array(5)].map((_, i) => (
          <Image key={i} src="/images/icons/icon-star.svg" alt="star" width={15} height={15} />
        ))}
      </div>

      <p className="text-[var(--brutal-black)] font-medium mb-6 flex-1 min-h-0">{testimonial.review}</p>

      <a href="#" className="flex items-center gap-4 shrink-0 p-2 rounded-none border-2 border-[var(--brutal-black)] bg-[var(--brutal-bg)] brutal-btn hover:bg-[var(--brutal-yellow)] transition-colors">
        <div className="w-12.5 h-12.5 rounded-none overflow-hidden border-2 border-[var(--brutal-black)]">
          <Image
            src={testimonial.authorImg}
            alt="author"
            className="w-full h-full object-cover"
            width={50}
            height={50}
          />
        </div>

        <div>
          <h3 className="font-black text-[var(--brutal-black)]">{testimonial.authorName}</h3>
          <p className="text-custom-sm font-bold text-[var(--brutal-black)]/80">{testimonial.authorRole}</p>
        </div>
      </a>
    </div>
  );
};

export default SingleItem;
