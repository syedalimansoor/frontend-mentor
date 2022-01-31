import { useEffect, useState } from "react";
import { setLocalStorage, getLocalStorage } from "./localStorage";

const useTheme = () => {
  const allThemes = getLocalStorage("all-themes");
  // Stores the current theme values
  const [theme, setTheme] = useState(allThemes.dark);

  // Changes the current theme
  const setThemeName = (themeName) => {
    setLocalStorage("theme", themeName);
    setTheme(allThemes[themeName]);
  };

  // Returns the name of the current theme
  const getThemeName = () => {
    const themeName = getLocalStorage("theme");
    if (themeName) return themeName;
    return "dark";
  };

  // useEffect(() => {
  //   const prefersDark =
  //     matchMedia && matchMedia("(prefers-color-scheme: dark)").matches;
  //   const prefersLight =
  //     matchMedia && matchMedia("(prefers-color-scheme: light)").matches;

  //   if (prefersDark) setThemeName("dark");
  //   if (prefersLight) setThemeName("light");
  // }, []);

  // Gets the current theme from local storage and sets its values

  useEffect(() => {
    const currThemeName = getThemeName();
    setTheme(allThemes[currThemeName]);
  }, []);

  return { theme, setThemeName, getThemeName };
};

export default useTheme;
