import React from "react";

import { useThemeValue } from "../contexts";

const BalanceBox = ({amount, cryptType, percentage}) => {
  const { theme } = useThemeValue()

  return (
    <div className={`p-4 bg-[${theme.sectionBg}] rounded-[9px] font-[700]`}>
      <div className={`flex justify-end text-[32px] text-[${theme.textColor}] leading-10`}>{amount}</div>
      <div className="flex justify-end">
        <div className="text-[16px] text-[#5E6272] mr-2">{cryptType}</div>
        <div className={`text-[16px] ${theme.sectionTextColor}`}>{percentage}</div>
      </div>
    </div>
  );
};

export default BalanceBox;