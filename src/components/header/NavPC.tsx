"use client";
import { NAVBAR } from "@/constants/nav";
import { PATHS } from "@/constants/path";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function NavPC() {
  const pathname = usePathname();

  return (
    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
      <Link href={PATHS.home} className="flex flex-shrink-0 items-center">
        <Image
          className="h-8 w-auto"
          src="/logo.png"
          alt="Errors"
          width={30}
          height={30}
        />
      </Link>
      <div className="hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {NAVBAR.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  isActive
                    ? "bg-gray-900 text-white"
                    : "text-gray-800 hover:bg-gray-700 hover:text-white"
                } rounded-md px-3 py-2 text-sm font-medium`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavPC;
