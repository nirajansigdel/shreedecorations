"use client";

import { FiSearch } from "react-icons/fi";

import { NavRoutes } from "./nav-route";
import { NavMobile } from "./nav-mobile";

export const NavLow = () => {
  return (
    <div className="h-[70px] flex items-center w-full justify-between  px-6  max-w-[1560px] mx-auto ">
      <h1 className=" text-2xl font-semibold text-pink-400">
        Shree<span className="text-red-400">Decore</span>
      </h1>

      <div className="hidden md:flex">
        <NavRoutes isNavbar />
      </div>

      <div className="flex gap-x-2 items-center">
        <div
          role="button"
          className="w-10 h-10 bg-gradient-to-b from-primary to-slate-100 rounded-full flex items-center justify-center hover:bg-primary/80 transition"
        >
          <FiSearch className="w-5 h-5" />
        </div>

        <div className="md:hidden">
          <NavMobile />
        </div>
      </div>
    </div>
  );
};
