import React from "react";
import { useState } from "react";
import { useThemeValue } from "../contexts";

const WalletBalance = ({ initialCount, walletaddress }) => {
  const [count, setCount] = useState(initialCount);
  const { theme } = useThemeValue();

  return (
    <>
      <div className="text-center items-center mx-4 my-12 space-y-2">
        <p class="text-md text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">
          Current Wallet Balance
        </p>
        <h1 className="py-8 text-2xl  font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {count} MATIC
          </span>
        </h1>
        <p className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Wallet Address : {walletaddress}
        </p>
      </div>
    </>
  );
};

export default WalletBalance;
