import React from "react";

import { useThemeValue } from "../contexts";

const CryptoList = () => {
  const { theme } = useThemeValue();

  return (
    <>
      <div class="container mx-auto px-5 py-2 ">
        <div class="-m-1 flex flex-wrap md:-m-2">
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full  rounded-lg object-cover object-center"
                src="assets/images/icons/polygon.png"
              />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-auto w-auto rounded-lg object-cover object-center"
                src="assets/images/icons/bitcoin.png"
              />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-116px w-116px rounded-lg object-cover object-center"
                src="assets/images/icons/bitcoin.png"
              />
            </div>
          </div>
          {/* <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/icons/bitcoin.png"
              />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/icons/bitcoin.png"
              />
            </div>
          </div>
          <div class="flex w-1/3 flex-wrap">
            <div class="w-full p-1 md:p-2">
              <img
                alt="gallery"
                class="block h-full w-full rounded-lg object-cover object-center"
                src="assets/images/icons/solana.png"
              />
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CryptoList;
