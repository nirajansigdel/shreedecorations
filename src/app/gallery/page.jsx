"use client";
import React, { useState } from "react";
import Image from "next/image";
import Img1 from "./(pics)/img1.jpg";
import Img2 from "./(pics)/img2.jpg";
import Img3 from "./(pics)/img3.jpg";
import Img4 from "./(pics)/img4.jpg";
import Img5 from "./(pics)/img5.jpg";
import Img6 from "./(pics)/img6.jpg";
import Img7 from "./(pics)/img7.jpg";
import Img8 from "./(pics)/img8.jpg";
import Img9 from "./(pics)/img9.jpg";

import ImageModal from "../../components/ImageModal";

function Page() {
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="border-2 h-full rounded-md flex">
      <div className="w-full p-2 gap-4 grid grid-cols-3">
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img2);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img2} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img1);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img1} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img3);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img3} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img4);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img4} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img5);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img5} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img6);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img6} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img7);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img7} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img8);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img8} alt="image1" layout="fill" objectFit="cover" />
        </div>
        <div
          onClick={() => {
            setOpenImageModal(true);
            setSelectedImage(Img9);
          }}
          className="relative w-full border h-[120px] rounded-lg bg-red-300 group-hover:border border-black transition overflow-hidden"
        >
          <Image src={Img9} alt="image1" layout="fill" objectFit="cover" />
        </div>
        {/* ... (Repeat for other images) */}
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
}

export default Page;
