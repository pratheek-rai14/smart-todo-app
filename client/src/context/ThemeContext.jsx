import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.body.className = "dark-theme";
    } else {
      document.body.className = "light-theme";
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ darkMode, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;