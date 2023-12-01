"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useRouter } from "next/navigation";

import { contents } from "@/lib/galleyTitle";
import { useState } from "react";

export const GalleryPopover = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const onClick = (slug: string) => {
    router.push(`/gallery/${slug}`);
    setIsOpen(false);
  };

  return (
    // <Popover>
    //   <PopoverTrigger asChild>{children}</PopoverTrigger>
    //   <PopoverContent className="p-4 grid grid-cols-3 gap-y-2  gap-x-8 w-full bg-primary text-white border-primary">
    //     {contents.map((content) => (
    //       <div
    //         role="button"
    //         className=" capitalize truncate p-2 w-full hover:bg-red-400/50 transition  rounded-md"
    //         key={content.link}
    //         onClick={() => {
    //           onClick(content.link);
    //         }}
    //       >
    //         {content.name}
    //       </div>
    //     ))}
    //   </PopoverContent>
    // </Popover>
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="p-0 m-0 outline-none border-0 cursor-pointer text-md">
          <span>Gallery</span>
        </MenubarTrigger>
        <MenubarContent className="w-[500px] grid grid-cols-3 absolute left-[-150px]">
          {contents.map((content) => (
            <MenubarItem key={content.name}>
              <span
                role="button"
                className=" capitalize truncate p-2 w-full  transition  rounded-md"
                key={content.link}
                onClick={() => {
                  onClick(content.link);
                }}
              >
                {content.name}
              </span>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
