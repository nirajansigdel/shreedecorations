"use client";

import React, { useState } from "react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { works } from "@/lib/works";

import ImageModal from "../ImageModal";

export const OurWork = () => {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const limitedWork = works.slice(0, 6);

  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-center ">
        <p>Collection</p>
        <h1 className="text-xl uppercase font-semibold mb-2">
          our amazing work
        </h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {limitedWork.map((src) => (
          <div
            onClick={() => {
              setOpenImageModal(true);
              setSelectedImage(src);
            }}
            className=" relative w-full h-[320px] bg-red-200 "
            key={src}
          >
            <Image src={src} alt="image" fill objectFit="cover" />
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
