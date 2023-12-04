"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

function Index({ isOpen, setIsOpen, image }) {
  const [isError, setIsError] = useState(false);
  // Disable scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";

      // Add an event listener for the "Escape" key press
      window.addEventListener("keydown", handleKeyPress);
    } else {
      document.body.style.overflow = "auto";

      // Remove the event listener when the modal is closed
      window.removeEventListener("keydown", handleKeyPress);
    }

    // Cleanup the effect when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, handleKeyPress]);

  function closeModal() {
    setIsOpen(false);
  }

  function handleKeyPress(event) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  // Close the modal when clicking on the overlay
  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }

  function openImageInNewTab() {
    // Open the image in a new tab or window
    window.open(image, "_blank");
  }

  return (
    <div
      className="w-full bg-black inset-0 bg-opacity-80 flex px-4 py-2 md:px-40 md:py-20 items-center justify-center  fixed top-0 left-0 z-10 h-full"
      onClick={handleOverlayClick} // Close the modal when clicking on the overlay
    >
      <div className="relative overflow-hidden max-h-[70vh] max-w-full md:max-w-[60vw] ">
        <div className="absolute px-2 py-1 md:px-4 md:py-3 w-full flex justify-between">
          <button
            className="rounded-full w-8 h-8 bg-black/50 flex items-center justify-center text-white/75 backdrop-blur-lg transition hover:bg-black/75 hover:text-white text-white"
            onClick={() => closeModal()}
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              fill-rule="evenodd"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M799.855 166.312c.023.007.043.018.084.059l57.69 57.69c.041.041.052.06.059.084a.118.118 0 0 1 0 .069c-.007.023-.018.042-.059.083L569.926 512l287.703 287.703c.041.04.052.06.059.083a.118.118 0 0 1 0 .07c-.007.022-.018.042-.059.083l-57.69 57.69c-.041.041-.06.052-.084.059a.118.118 0 0 1-.069 0c-.023-.007-.042-.018-.083-.059L512 569.926 224.297 857.629c-.04.041-.06.052-.083.059a.118.118 0 0 1-.07 0c-.022-.007-.042-.018-.083-.059l-57.69-57.69c-.041-.041-.052-.06-.059-.084a.118.118 0 0 1 0-.069c.007-.023.018-.042.059-.083L454.073 512 166.371 224.297c-.041-.04-.052-.06-.059-.083a.118.118 0 0 1 0-.07c.007-.022.018-.042.059-.083l57.69-57.69c.041-.041.06-.052.084-.059a.118.118 0 0 1 .069 0c.023.007.042.018.083.059L512 454.073l287.703-287.702c.04-.041.06-.052.083-.059a.118.118 0 0 1 .07 0Z"></path>
            </svg>
            {/* <AiOutlineClose className="text-white" /> */}
          </button>
        </div>
        {!isError && (
          <div className="w-3/4 w-full">
            <Image
              width={600} // Set a reasonable max width
              height={1000} // Set a reasonable max height
              src={image}
              onError={() => setIsError(true)}
              alt="profile pic"
              unoptimized
              loading="lazy"
            />
          </div>
        )}

        {isError && (
          <div className="rounded-md flex-col gap-2 fw-600 w-[1000px] h-[500px] flex items-center justify-center bg-orange-100">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Index;
