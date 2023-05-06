import React from "react";

import Topbar from "../components/Topbar";
import Navigation from "../components/Navigation";
import { useThemeValue } from "../contexts";
import { darkTheme } from "../styles/theme";
import Sidebar from "../components/Sidebar";

const Receive = () => {
  const { theme } = useThemeValue(); 

  return (
    <div className="flex">
      <Sidebar/>
      <div className="py-[30px] md:px-12 xl:px-16 flex-1">
        <Topbar
          backBtnStatus={true}
          pageTitle={"Receive"}
          confirmBtnStatus={false}
        />
        <div className={`px-4 lg:flex lg:gap-8 lg:px-0 ${JSON.stringify(theme)===JSON.stringify(darkTheme) && "rectangle"}`}>
          <div className="flex justify-center lg:block pt-[56px]">
            <img
              className="w-[50%] lg:w-[190px] border-[2px] border-[#333] rounded-[10px]"
              src="assets/images/QR.png" 
              alt="QR"
            />
          </div>
          <div className={`bg-[${theme.sectionBg}] p-[16px] mt-[24px] lg:mt-14 lg:w-[350px] rounded-[9px]`}>
            <div className="text-[#5E6272] text-[13px] leading-[24px]">Network</div>
            <div className="flex justify-between">
              <div className={`text-[${theme.textColor}] text-[16px] leading-[24px] font-[700]`}>SOL</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-chevron-down" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
              </div>
            </div>
            <hr className={`my-[12px] border-t-[1px] border-[${theme.hrColor}]`}/>
            <div className="flex justify-between">
              <div>
                <div className="text-[#5E6272] text-[13px] leading-[24px]">Wallet Address</div>
                <div className={`text-[${theme.textColor}] text-[16px] leading-[24px] font-[700]`}>Fd82...9fk1</div>
              </div>
              <button className={`text-[${theme.textColor}] py-[8px] px-[20px] border rounded-full border-[${theme.textColor}]`}>Copy</button>
            </div>
          </div>
        </div>
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[24px]"><Navigation/></div>
      </div>
    </div>
  );
};

export default Receive;