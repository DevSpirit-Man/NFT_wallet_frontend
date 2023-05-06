import React from "react";

import BackButton from "./BackButton";
import PageTitle from "../pages/PageTitle";

const Topbar = ({backBtnStatus, pageTitle, confirmBtnStatus}) => {

  return (
    <div>
      <div className="pb-[12px] relative">
        {backBtnStatus && <div className="absolute top-[22px] md:top-[35px] px-4 md:px-0"><BackButton/></div>}
        <PageTitle title={pageTitle}/>
        {confirmBtnStatus && 
          <button className="absolute top-[18px] md:top-[85px] right-[20px] bg-[#FE5F55] rounded-[24px] text-[14px] text-[#fff] leading-[24px] py-[8px] px-[20px]">
            Done
          </button>
        }
      </div>
    </div>
  );
};

export default Topbar;