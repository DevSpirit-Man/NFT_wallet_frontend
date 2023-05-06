import React from "react";

import { useThemeValue } from "../contexts";

const FriendItem = ({avatarUrl, friendName}) => {
  const { theme } =useThemeValue()

  return (
    <div>
      <div className="aspect-w-1 aspect-h-1" >
        <img src={avatarUrl} className="w-full rounded-full object-cover object-square" alt="avatar"/>
      </div>
      <div className={`pt-[8px] text-[10px] leading-4 text-[${theme.textColor}] text-center`}>{friendName}</div>
    </div>
  );
};

export default FriendItem;