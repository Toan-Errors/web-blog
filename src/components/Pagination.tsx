"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";

interface PaginationProps {
  total: number;
  pageSize: number;
}

const createPageDots = (key: number) => {
  return (
    <span
      key={key}
      className="flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 cursor-pointer"
    >
      ...
    </span>
  );
};

const createPageItem = (page: number, current: number, onChange: any) => {
  const isCurrent = page === current;
  return (
    <span
      key={page}
      onClick={() => onChange(page)}
      className={
        isCurrent
          ? "flex items-center justify-center px-4 py-2 mx-1 text-white transition-colors duration-300 transform bg-blue-500 rounded-md dark:bg-blue-500 dark:text-gray-200 cursor-pointer"
          : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 cursor-pointer"
      }
    >
      {page}
    </span>
  );
};

const renderPages = (current: number, pages: number, onChange: any) => {
  if (pages <= 4) {
    return Array.from(Array(pages), (_, i) => i + 1).map((page) =>
      createPageItem(page, current, onChange)
    );
  }

  if (current <= 3) {
    return [
      Array.from(Array(4), (_, i) => i + 1).map((page) =>
        createPageItem(page, current, onChange)
      ),
      createPageDots(5),
      createPageItem(pages, current, onChange),
    ];
  }

  if (current >= pages - 2) {
    return [
      createPageItem(1, current, onChange),
      createPageDots(2),
      Array.from(Array(4), (_, i) => pages - 3 + i).map((page) =>
        createPageItem(page, current, onChange)
      ),
    ];
  }

  return [
    createPageItem(1, current, onChange),
    createPageDots(2),
    Array.from(Array(3), (_, i) => current - 1 + i).map((page) =>
      createPageItem(page, current, onChange)
    ),
    createPageDots(5),
    createPageItem(pages, current, onChange),
  ];
};

function Pagination({ total, pageSize }: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = Number(searchParams.get("page")) || 1;
  const pages = Math.ceil(total / pageSize);

  const onChange = (page: number) => {
    if (page < 1 || page > pages) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    router.push(pathname + "?" + params.toString());
  };

  return (
    <div
      className={pages > 1 ? "flex items-center justify-center mt-8" : "hidden"}
    >
      <span
        onClick={() => onChange(current - 1)}
        className={
          current === 1
            ? "flex items-center justify-center px-4 py-2 mx-1 text-gray-300 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 cursor-pointer"
            : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 cursor-pointer"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {renderPages(current, pages, onChange)}
      <span
        onClick={() => onChange(current + 1)}
        className={
          current === pages
            ? "flex items-center justify-center px-4 py-2 mx-1 text-gray-300 transition-colors duration-300 transform bg-white rounded-md dark:bg-gray-800 dark:text-gray-200 cursor-pointer"
            : "flex items-center justify-center px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md rtl:-scale-x-100 dark:bg-gray-800 dark:text-gray-200 hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 cursor-pointer"
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}

export default Pagination;
