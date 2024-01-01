import React from "react";
import NavPC from "./header/NavPC";
import NavProfile from "./header/NavProfile";
import NavAuth from "./header/NavAuth";
import NavMobile from "./header/NavMobile";
import MobileMenuButton from "./header/MobileMenuButton";

async function Header() {
  return (
    <header className="z-10 w-full bg-white">
      <nav className="bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <MobileMenuButton />
            <NavPC />
            <NavAuth />
            <NavProfile />
          </div>
        </div>
        <NavMobile />
      </nav>
    </header>
  );
}

export default Header;
