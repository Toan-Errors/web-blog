"use client";
import { useSearchParams } from "next/navigation";
import React from "react";

function NavMobile() {
  const searchParams = useSearchParams();

  const menuOpen = searchParams.has("menu");

  return (
    <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
      <div className="space-y-1 px-2 pb-3 pt-2">
        <a
          href="#"
          className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
          aria-current="page"
        >
          Dashboard
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Team
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Projects
        </a>
        <a
          href="#"
          className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
        >
          Calendar
        </a>
      </div>
    </div>
  );
}

export default NavMobile;
