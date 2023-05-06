import React from "react";

const ProgressBox = () => {
  return (
    <div>
      <div className="mission-box mt-4 relative rounded-[20px] p-[25px] z-50">
        <div className="text-[18px] font-[700] text-[#fff] leading-[24px]">Learn with Editions</div>
        <div className="text-[14px] leading-[24px] text-[#fff] mt-1">3/5 missions completed</div>
        <div className="mt-[17px] flex justify-between">
          <div className="w3-progress-container w3-round-xlarge mt-[3px]">
            <div className="w3-progressbar w3-round-xlarge" style={{width:"68%"}}></div>
          </div>
          <div className="text-[14px] font-[700] text-[#fff]">68%</div>
        </div>
        <button className="absolute top-2 right-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" className="bi bi-x-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>
      <div className="bg-[#FE5F55] relative h-[28px] rounded-[20px] mx-2 mt-[-20px] z-40"></div>
      <div className="bg-[#ff4a3f] h-[28px] rounded-[20px] mx-[25px] mt-[-20px] z-30"></div>
    </div>
  );
};

export default ProgressBox;