import React from "react";
import { useThemeValue } from "../contexts";

const PageTitle = ({title}) => {
  const { theme } = useThemeValue();

  return (
    <div className={`title-font pt-[25px] md:pt-[85px] md:text-[32px] xl:text-[40px] text-center md:text-left text-[${theme.textColor}]`}>
      {title}
    </div>
  );
};

export default PageTitle;