import React from "react";

import { useThemeValue } from "../contexts";

const SectionTitle = ({sectionTitle}) => {
  const { theme } = useThemeValue()

  return (
    <div className="flex justify-between">
      <div className={`text-[16px] leading-[24px] font-[700 ] text-[${theme.textColor}]`}>{sectionTitle}</div>
      <div className="text-[16px] leading-[24px] text-[#9A9FA5] ">See All</div>
    </div>
  );
};

export default SectionTitle;