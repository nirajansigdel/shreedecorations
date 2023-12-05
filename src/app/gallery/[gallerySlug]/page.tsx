//@ts-nocheck
"use client";

import { Separator } from "@/components/ui/separator";
import { CldImage } from "next-cloudinary";

import { contents } from "@/lib/galleyTitle";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { getPicsFromFolder, deletePics } from "@/components/action";

import { CiTrash } from "react-icons/ci";

import ImageModal from "../../../components/ImageModal";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";

const GallerySlugPage = ({
  params,
}: {
  params: {
    gallerySlug: string;
  };
}) => {
  const { toast } = useToast();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [openImageModal, setOpenImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await getPicsFromFolder(params.gallerySlug); // Assuming pics() returns a promise
      setImages(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching images:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.gallerySlug]);

  const isGallery = contents.find(
    (contents) => contents.link === params.gallerySlug.replace("%20", " ")
  );

  if (!isGallery) return redirect("/not-found");

  if (loading) {
    return (
      <p className="border rounded-md h-full flex items-center justify-center">
        Loading...
      </p>
    );
  }

  if (images.length == 0) {
    return (
      <p className="border rounded-md h-full flex items-center justify-center">
        No images
      </p>
    );
  }

  return (
    <div className=" rounded-sm p-4  mt-6">
      <div className="text-center ">
        <p>Collection</p>
        <h1 className="text-xl uppercase font-semibold mb-2">
          {params.gallerySlug.replace("%20", " ")}
        </h1>
        <Separator />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 mt-8">
        {images.map((image) => (
          <div
            className="relative"
            key={image?.public_id}
            onClick={(e) => {
              e.stopPropagation();
              setOpenImageModal(true);
              setSelectedImage(image?.url);
            }}
          >
            <CldImage
              alt="image"
              width="600"
              height="600"
              src={image?.public_id}
            />
            <AlertDialog open={openModal} onOpenChange={setOpenModal}>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your image.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <button
                    className="border  text-black rounded-md px-5 py-3  text-sm"
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setOpenModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    className="border bg-red-600 text-white rounded-md px-5 py-3  text-sm"
                    onClick={async (e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const deleteResult = await deletePics(image?.public_id);
                      console.log({ deleteResult });
                      if (deleteResult.result == "ok") {
                        setOpenModal(false);
                        await toast({
                          title: "Image Deleted",
                        });
                        await fetchData();
                      }
                    }}
                  >
                    Continue
                  </button>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <button
              className="absolute top-[10px] right-[20px] bg-gray-200 rounded-full p-1 "
              onClick={async (e) => {
                e.stopPropagation();
                setOpenModal(true);
                // await deletePics(image?.public_id);
                // await fetchData();
              }}
            >
              <CiTrash className="w-4 h-4" />
            </button>
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

export default GallerySlugPage;
