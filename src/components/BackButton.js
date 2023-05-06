import React from "react";

import { useThemeValue } from "../contexts";

const BackButton = () => {
  const { theme } = useThemeValue();

  return (
    <div className={`h-[28px] w-[28px] rounded-[7px] border-[2px] border-gray-${theme.borderOpacity}`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={theme.textColor} className="bi bi-arrow-left-short" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
      </svg>
    </div>
  );
};

export default BackButton;