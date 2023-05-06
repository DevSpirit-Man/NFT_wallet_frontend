import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({url, title}) => {
  return (
    <Link to={url}>
      <div className="mt-[2px] text-[#9A9FA5] text-[15px] leading-6 font-[700]">{title}</div>
    </Link>
  );
};

export default MenuItem;