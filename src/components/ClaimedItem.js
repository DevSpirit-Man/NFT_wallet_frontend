import React from "react";

const ClaimedItem = ({claimedName, claimedInfo}) => {
  return (
    <div className="relative p-4 flex bg-[#0A141C] rounded-[16px] mb-2">
      <img src="assets/images/vector.jpeg" className="w-10 h-10 mr-4 rounded-full" alt="claimedimage"/>
      <div>
        <div className="text-[18px] leading-6 font-[700] text-[#fff]">{claimedName}</div>
        <div className="text-[10px] font-[700] leading-4 text-[#5E6272]">{claimedInfo}</div>
      </div>
      <span className="absolute top-4 right-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FE5F55" className="bi bi-check-circle-fill" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
        </svg>
      </span>
    </div>
  );
};

export default ClaimedItem;