"use client";
import { PATHS } from "@/constants/path";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import React from "react";

function NavAuth() {
  const { isAuthenticated } = useAuth();

  return (
    <div
      className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${
        isAuthenticated ? "hidden" : ""
      }`}
    >
      {/* 2 button login and register */}
      <Link
        href={PATHS.auth.login}
        className="rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100"
      >
        Đăng nhập
      </Link>
      <Link
        href={PATHS.auth.register}
        className="ml-2 rounded-md bg-gray-700 px-4 py-2 text-sm font-medium text-white"
      >
        Đăng ký
      </Link>
    </div>
  );
}

export default NavAuth;
