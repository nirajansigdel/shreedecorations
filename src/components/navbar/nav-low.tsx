"use client";

import { FiSearch } from "react-icons/fi";

import { NavRoutes } from "./nav-route";
import { NavMobile } from "./nav-mobile";
import Link from "next/link";

export const NavLow = () => {
  return (
    <div className="h-[70px] flex items-center w-full justify-between  px-6  max-w-[1440px] mx-auto ">
      <Link href={"/"}>
        <h1 className=" text-2xl font-semibold text-pink-400">
          Shree<span className="text-red-400">Decore</span>
        </h1>
      </Link>

      <div className="hidden md:flex">
        <NavRoutes isNavbar />
      </div>

      <div className="flex gap-x-2 items-center">
        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};
