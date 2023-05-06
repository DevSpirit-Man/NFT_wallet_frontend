import React from "react";

const SubMenuItem = ({subTitle}) => {
  return (
    <div className="flex justify-between">
      <div className="sub-menu">{subTitle.title}</div>
      {subTitle.count>0 && <div className='text-[15px] m-3 px-[6px] rounded-[6px] leading-6 text-[#fff] bg-[#FE5F55]'>{subTitle.count}</div>}
    </div>
  );
};

export default SubMenuItem;