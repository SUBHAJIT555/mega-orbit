"use client";

import { useState } from "react";

interface CategoryItemProps {
  category: {
    id: number;
    name: string;
    products: number;
    isRefined: boolean;
  };
  isSelected: boolean;
  onToggle: () => void;
}

const CategoryItem = ({ category, isSelected, onToggle }: CategoryItemProps) => {
  return (
    <button
      className={`${isSelected ? "text-[var(--brutal-black)]" : ""} group flex items-center justify-between ease-out duration-200 hover:text-[var(--brutal-black)] font-bold`}
      onClick={onToggle}
    >
      <div className="flex items-center gap-2">
        <div
          className={`cursor-pointer flex items-center justify-center rounded-none w-4 h-4 border-2 ${isSelected ? "border-[var(--brutal-black)] bg-[var(--brutal-black)]" : "bg-white border-[var(--brutal-black)]"
            }`}
        >
          <svg
            className={isSelected ? "block" : "hidden"}
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.33317 2.5L3.74984 7.08333L1.6665 5"
              stroke="white"
              strokeWidth="1.94437"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <span className="text-sm">{category.name}</span>
      </div>

      <span
        className={`${isSelected ? "text-white bg-[var(--brutal-black)]" : "bg-[var(--brutal-bg)] border border-[var(--brutal-black)]"
          } inline-flex rounded-none text-custom-xs px-2 font-bold ease-out duration-200 group-hover:bg-[var(--brutal-yellow)] group-hover:text-[var(--brutal-black)]`}
      >
        {category.products}
      </span>
    </button>
  );
};

interface CategoryDropdownProps {
  categories: Array<{
    id: number;
    slug: string;
    name: string;
    products: number;
    isRefined: boolean;
  }>;
  selectedCategories: number[];
  onCategoryChange: (categoryIds: number[]) => void;
}

const CategoryDropdown = ({ categories, selectedCategories, onCategoryChange }: CategoryDropdownProps) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);

  const handleCategoryToggle = (categoryId: number) => {
    const isSelected = selectedCategories.includes(categoryId);

    if (isSelected) {
      // Remove category
      onCategoryChange(selectedCategories.filter(id => id !== categoryId));
    } else {
      // Add category (no limit)
      onCategoryChange([...selectedCategories, categoryId]);
    }
  };

  return (
    <div className="bg-white rounded-none border-[3px] border-[var(--brutal-black)] brutal-box">
      <div
        onClick={(e) => {
          e.preventDefault();
          setToggleDropdown(!toggleDropdown);
        }}
        className="cursor-pointer flex items-center justify-between py-3 pl-6 pr-5.5"
      >
        <p className="font-bold text-[var(--brutal-black)]">Category</p>
        <button
          aria-label="button for category dropdown"
          className={`text-[var(--brutal-black)] ease-out duration-200 ${toggleDropdown && "rotate-180"
            }`}
        >
          <svg
            className="fill-current"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.43057 8.51192C4.70014 8.19743 5.17361 8.161 5.48811 8.43057L12 14.0122L18.5119 8.43057C18.8264 8.16101 19.2999 8.19743 19.5695 8.51192C19.839 8.82642 19.8026 9.29989 19.4881 9.56946L12.4881 15.5695C12.2072 15.8102 11.7928 15.8102 11.5119 15.5695L4.51192 9.56946C4.19743 9.29989 4.161 8.82641 4.43057 8.51192Z"
              fill=""
            />
          </svg>
        </button>
      </div>

      {/* dropdown && 'shadow-filter */}
      {/* <!-- dropdown menu --> */}
      <div
        className={`flex-col gap-3 py-6 pl-6 pr-5.5 ${toggleDropdown ? "flex" : "hidden"
          }`}
      >
        {categories.map((category) => {
          const isSelected = selectedCategories.includes(category.id);

          return (
            <CategoryItem
              key={category.id}
              category={category}
              isSelected={isSelected}
              onToggle={() => handleCategoryToggle(category.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CategoryDropdown;
