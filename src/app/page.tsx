import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 bg-slate-600">
      {/* starting of next section */}
      <div className="flex bg-[#EF3434]  py-3 justify-between px-28 items-center">
        <div className="flex gap-5 ">
          <div className="flex justify-center items-center gap-1">
            <span className=" text-white ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
              </svg>
            </span>
            <span className="text-white font-medium">
              <a href="">decore123@gmail.com</a>
            </span>
          </div>
          <div className="flex justify-center items-center gap-1 ">
            <span className=" text-white ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"></path>
              </svg>
            </span>
            <span className="text-white font-medium">
              <a href="">+977 00000000</a>
            </span>
          </div>
          <div className="flex justify-center items-center gap-1">
            <span className=" text-white ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
              </svg>
            </span>

            <span className="text-white font-medium">
              <a href="">kathmandu nepal</a>
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
            </svg>
          </span>
          <span className="text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
              <circle cx="11.994" cy="11.979" r="3.003"></circle>
            </svg>
          </span>
          <span className="text-white">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
            </svg>
          </span>
        </div>
      </div>

      {/* starting of nav section section */}
      <div className="flex justify-between items-center py-7 border bg-white border-red-50 px-28">
        <div className="flex">
          <span className="font-extrabold text-md text-[#EF3434] text-2xl ">
            Shree
          </span>
          <span className="flex font-extrabold text-orange-500 text-2xl">
            Decore
          </span>
        </div>

        <div className="flex gap-12 cursor-pointer font-medium">
          <span className="">Home</span>
          <span>Service</span>
          <span>Gallery</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <span>LOGO</span>
      </div>

      {/* starting of body next section */}
      <div className=" flex   bg-[#EF3434] justify-between items-center px-28 py-7">
        <span className=" flex w-[900px] ">image</span>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <span className="text-white">What LOVES GIVES</span>
            <span>image</span>
          </div>
          <span className=" text-white ">
            “The real act of marriage takes place in the heart, not in the
            ballroom or church or synagogue. It’s a choice you make not just on
            your wedding day, but over and over again— and that choice is
            reflected in the way you treat your husband or wife.” — Barbara de
            Angelis
          </span>
        </div>
      </div>

      {/* start of another section */}

      <main className=" flex flex-col  bg-[#EF3434]  justify-center items-center gap-8 py-7">
        <div className="flex  flex-col items-center justify-between ] gap-5 px-2  ">
          <div className="flex gap-8  justify-center md:justify-start items-center  text-[#EF3434] '">
            <span className="bg-white rounded-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z"></path>
              </svg>
            </span>
            <span className="bg-white rounded-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z"></path>
                <circle cx="11.994" cy="11.979" r="3.003"></circle>
              </svg>
            </span>
            <span className="bg-white rounded-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
              </svg>
            </span>
            <span className="bg-white rounded-md ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="3em"
                width="3em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
              </svg>
            </span>
          </div>
          <div className="flex gap-7 text-white font-medium ">
            <span>
              <a href="">Home</a>
            </span>
            <span>
              <a href="">Service</a>
            </span>
            <span>
              <a href="">Gallery</a>
            </span>
            <span>
              <a href="">About</a>
            </span>
            <span>
              <a href="">Contact</a>
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-3  justify-center items-center px-2">
          <img alt="jhiuhui" className="text-white " />
          <span className=" text-white ">
            @Copyright 2023 design by Two direction
          </span>
        </div>
      </main>
    </div>
  );
}
