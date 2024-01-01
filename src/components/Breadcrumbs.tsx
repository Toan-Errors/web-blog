import Link from "next/link";
import React from "react";

interface BreadcrumbsProps {
  items: {
    label: string;
    href: string;
    active?: boolean;
  }[];
}

function Breadcrumbs({ items }: BreadcrumbsProps) {
  if (!items || items.length === 0) return <></>;
  return (
    <div className="flex items-center py-4 overflow-x-auto whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-300">
      <Link href="/" className="text-gray-600 dark:text-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 rtl:scale-x-100"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.active ? (
            <>
              <span className="mx-0 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>

              <span className="mx-0 text-gray-500 dark:text-gray-300">
                {item.label}
              </span>
            </>
          ) : (
            <>
              <span className="mx-0 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <Link
                href={item.href}
                className="text-gray-600 dark:text-gray-200 hover:underline"
              >
                {item.label}
              </Link>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Breadcrumbs;
