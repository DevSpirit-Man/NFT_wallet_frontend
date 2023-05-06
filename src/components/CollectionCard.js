import React from "react";

import { useThemeValue } from "../contexts";

const CollectionCard = ({collectionUrl, collectionName, collectionInfo}) => {
  const { theme } = useThemeValue();

  return (
    <div>
      <div className="max-w-[400px] max-h-[400px]" >
        <img src={collectionUrl} className="rounded-[10px]" alt=""/>
      </div>
      <div className={`collection-name pt-[16px] font-[700] text-[${theme.textColor}]`}>{collectionName}</div>
      <div className="collection-info">{collectionInfo}</div>
    </div>
  );
};

export default CollectionCard;