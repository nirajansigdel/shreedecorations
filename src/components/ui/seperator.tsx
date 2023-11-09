"use client";

import { MdOutlineFavorite } from "react-icons/md";

export const Seperator = ({ color }: { color?: string }) => {
  return (
    <div className="flex items-center gap-x-2 justify-center">
      <div className={"border-b w-[120px] border-black rounded " + color} />
      <MdOutlineFavorite className="w-8 h-8 text-yellow-400" />
      <div className={"border-b w-[120px] border-black rounded " + color} />
    </div>
  );
};
