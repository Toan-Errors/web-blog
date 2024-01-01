"use client";
import { PATHS } from "@/constants/path";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "react-toastify";

function NavProfile() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleNotification = () => {
    toast.success("🦄 Wow so easy!");
  };

  return (
    <div
      className={`absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ${
        isAuthenticated ? "" : "hidden"
      }`}
    >
      <button
        type="button"
        onClick={handleNotification}
        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Xem thông báo</span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </button>
      <div className="relative ml-3">
        <div>
          <button
            type="button"
            className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Mở menu</span>
            <Image
              className="h-8 w-8 rounded-full"
              src={user?.avatar || "/avatar.png"}
              alt="Profile"
              width={32}
              height={32}
            />
          </button>
        </div>
        <div
          className={`absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
            isMenuOpen ? "" : "hidden"
          }`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <Link
            href={PATHS.profile.root}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Chào: {user?.name}
          </Link>
          <a
            href={PATHS.profile.edit}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Cài đặt
          </a>
          <span
            className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
            onClick={() => logout()}
          >
            Đăng xuất
          </span>
        </div>
      </div>
    </div>
  );
}

export default NavProfile;
