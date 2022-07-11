import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme((prvDarkTheme) => !prvDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
