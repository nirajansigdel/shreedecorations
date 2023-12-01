"use client";

import { AiOutlineMenu } from "react-icons/ai";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavRoutes } from "./nav-route";

export const NavMobile = () => {
  return (
    <Sheet>
      <SheetTrigger
        asChild
        className="md:hidden pr-4 hover:opacity-75 transition"
      >
        <AiOutlineMenu className="w-10 h-10" />
      </SheetTrigger>
      <SheetContent side="left" className=" bg-white flex flex-col  gap-y-10 ">
        <NavRoutes isMobile />
      </SheetContent>
    </Sheet>
  );
};
