import React from "react";
import { useThemeValue } from "../contexts";
import { lightTheme, darkTheme } from "../styles/theme";
import { twMerge } from "tailwind-merge";

const Layout = ({ children }) => {
  const { theme, setTheme } = useThemeValue();

  const changeTheme = (e, val) => {
    e.preventDefault();
    localStorage.setItem("theme", JSON.stringify(val));
    setTheme(val);
  };
  const className = twMerge("min-h-screen", `${theme.backgroundColor}`);

  return (
    <div className={className}>
      <div className="absolute right-[16px] top-4 md:hidden">
        {JSON.stringify(theme) === JSON.stringify(lightTheme) ? (
          <span
            className="cursor-pointer"
            onClick={(e) => changeTheme(e, darkTheme)}
          >
            <img src="assets/images/light.png" width={50} alt=""></img>
          </span>
        ) : (
          <span
            className="cursor-pointer"
            onClick={(e) => changeTheme(e, lightTheme)}
          >
            <img src="assets/images/dark.png" width={50} alt=""></img>
          </span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
