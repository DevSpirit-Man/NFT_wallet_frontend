import React from "react";

import { useThemeValue } from "../contexts";

const ExchangeItem = ({date, history}) => {
  const { theme } = useThemeValue()

  return (
    <div className="mt-6">
      <div className="text-[16px] text-primary leading-6 mb-2">{date}</div>
      {history.map((item, i) => 
        <div key={i} className={`bg-[${theme.historyBg}] p-2 my-[1px] flex justify-between`}>
          <div className="flex">
            <img src={item.imgUrl} className="w-12 h-12 rounded-[6px] mr-3" alt=""/>
            <div>
              <div className="text-primary text-[13px] leading-6">Received</div>
              <div className={`text-[${theme.textColor}] text-[16px] leading-6 font-[700]`}>{item.itemName}</div>
            </div>
          </div>
          <div>
            <div className="text-primary text-[13px] leading-6 flex justify-end">{item.itemType}</div>
            <div className={`text-[16px] ${theme.sectionTextColor} leading-6`}>{item.itemAmount}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExchangeItem;