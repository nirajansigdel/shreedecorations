"use client";

import { NavLow } from "./nav-low";
import { NavTop } from "./nav-top";

export const Navbar = () => {
  return (
    <div className="w-full">
      {/* nav upper */}

      <NavTop />

      {/* nav lower */}

      <NavLow />
    </div>
  );
};
