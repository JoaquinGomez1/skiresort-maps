import { useEffect, useState } from "react";

export default function useDarkMode(shouldUseDarkMode: boolean) {
  const [isDarkMode, setDarkMode] = useState<boolean>(shouldUseDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.forEach((x) => root.classList.remove(x));
    root.classList.add(shouldUseDarkMode ? "dark" : "light");
  }, [shouldUseDarkMode]);

  return { setDarkMode, isDarkMode };
}
