import React from "react";
import { Link } from "react-router-dom";

import { useThemeValue } from "../contexts";

const Onboarding = () => {
  const { theme } = useThemeValue()

  return (
    <div className="onboarding flex items-center  justify-center">
      <div className="px-4">
        <div className={`text-center font-[700] text-[40px] leading-24 text-[${theme.textColor}]`}>
          Collect from your<br/> favorite brands
        </div>
        <div>
          <div className="text-center bg-[#FE5F55] w-full md:w-[325px] py-[15px] rounded-full mt-12">
            <Link className="text-[#fff]" to="/signup">Sign Up</Link>
          </div>
          <div className="text-center mt-7">
            <Link className="border-none bg-transparent text-[#9A9FA5]" to="/login">I already have an account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;