import React from "react";

import { useThemeValue } from "../contexts";

const LatestCard = ({collectionUrl, collectionName, collectionInfo}) => {
  const { theme } = useThemeValue();

  return (
    <>
      <div className="max-w-[400px] max-h-[400px]" >
        <img src={collectionUrl} className="rounded-[10px]" alt=""/>
      </div>
      <div className={`pt-[8px] text-[12px] leading-4 text-[${theme.textColor}]`}>{collectionName}</div>
      <div className="text-[10px] text-[#9A9FA5]">{collectionInfo}</div>
    </>
  );
};

export default LatestCard;