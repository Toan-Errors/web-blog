import React from "react";
import { PATHS } from "./path";

interface NavItem {
  name: string;
  href: string;
  current: boolean;
  icon?: React.ReactNode;
  children?: NavItem[];
}

export const NAVBAR: NavItem[] = [
  {
    name: "Bài viết",
    href: PATHS.posts.root,
    current: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    ),
  },
  {
    name: "Nhóm Công Khai",
    href: PATHS.groups.root,
    current: false,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
  },
];

export const LOGIN_NAVBAR = [
  {
    name: "Thông tin cá nhân",
    href: PATHS.profile.root,
    current: false,
  },
  {
    name: "Đăng xuất",
    href: PATHS.auth.logout,
    current: false,
  },
];
