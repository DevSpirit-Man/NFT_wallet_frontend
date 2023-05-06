import { useState, createContext, useContext } from "react";
import { lightTheme } from "../styles/theme";

export const ThemeContext = createContext({
  theme: '',
  setTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme')? JSON.parse(localStorage.getItem('theme')): lightTheme);
  const context = {
    theme,
    setTheme,
  };
  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};

export const useThemeValue = () => useContext(ThemeContext);
