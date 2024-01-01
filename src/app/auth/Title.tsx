"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const TITLES = {
  "/auth/login": "Đăng nhập",
  "/auth/register": "Đăng ký",
  "/auth/reset-password": "Đặt lại mật khẩu",
};

const OTHERS = {
  "/auth/login": {
    href: "/auth/register",
    name: "Đăng ký",
  },
  "/auth/register": {
    href: "/auth/login",
    name: "Đăng nhập",
  },
  "/auth/reset-password": {
    href: "/auth/login",
    name: "Đăng nhập",
  },
};

function Title() {
  const pathname = usePathname();

  const title = TITLES[pathname as keyof typeof TITLES];
  const info = OTHERS[pathname as keyof typeof OTHERS];

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {title}
      </h2>
      <p className="max-w mt-2 text-center text-sm text-gray-600">
        Hoặc
        <Link
          href={info.href}
          className="ml-1 font-medium text-blue-600 hover:text-blue-500"
        >
          {info.name}
        </Link>
      </p>
    </div>
  );
}

export default Title;
