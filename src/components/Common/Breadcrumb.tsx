import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }) => {
  return (
    <div className="overflow-hidden pt-[209px] sm:pt-[155px] lg:pt-[95px] xl:pt-[165px] bg-[var(--brutal-bg)]">
      <div className="border-b-4 border-[var(--brutal-black)]">
        <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-6 xl:py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <h1 className="font-black text-[var(--brutal-black)] text-xl sm:text-2xl xl:text-custom-2">
              {title}
            </h1>
            <ul className="flex items-center gap-2 text-sm font-bold">
              <li className="text-[var(--brutal-black)] hover:text-[var(--brutal-cyan)]">
                <Link href="/">Home /</Link>
              </li>
              {pages.length > 0 &&
                pages.map((page, key) => (
                  <li className="text-custom-sm last:text-[var(--brutal-cyan)] capitalize" key={key}>
                    {page}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
