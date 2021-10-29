import { createContext, PropsWithChildren, useContext, useState } from "react";
import useDarkMode from "../hooks/useDarkMode";

interface DarkModeProviderInterface {
  darkModeValue: boolean;
  setDarkModeValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DarkModeContextProvider = createContext<DarkModeProviderInterface>(
  undefined!
);

export function DarkModeContext(props: PropsWithChildren<any>) {
  const [darkModeValue, setDarkModeValue] = useState<boolean>(true);
  useDarkMode(darkModeValue);

  return (
    <DarkModeContextProvider.Provider
      value={{ darkModeValue, setDarkModeValue }}
      {...props}
    >
      {props.children}
    </DarkModeContextProvider.Provider>
  );
}

export default function useDarkModeProvider() {
  const darkModeContext = useContext(DarkModeContextProvider);
  if (!darkModeContext)
    throw new Error("Please use this hook inside a provider");

  return darkModeContext;
}
