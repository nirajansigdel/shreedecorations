"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

import ImageModal from "../ImageModal";

export const OurWork = () => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-center ">
        <p>Collection</p>
        <h1 className="text-xl uppercase font-semibold mb-2">
          our amazing work
        </h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6">
        {[...new Array(8)].map((num) => (
          <div className=" relative w-full h-[320px] bg-red-200 " key={num}>
            <Image
              src="https://images.unsplash.com/photo-1616165415772-f5b95c3ae135?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image"
              fill
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {openImageModal && (
        <ImageModal
          isOpen={openImageModal}
          setIsOpen={setOpenImageModal}
          image={selectedImage}
        />
      )}
    </div>
  );
};
