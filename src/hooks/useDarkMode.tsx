import { useEffect } from "react";

export default function useDarkMode(isDarkMode: boolean = true) {
  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.add(isDarkMode ? "dark" : "light");
  }, [isDarkMode]);
}
