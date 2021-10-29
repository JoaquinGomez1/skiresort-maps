import { PropsWithChildren } from "react";
import { DarkModeContext } from "./context/ThemeProvider";
import { TripsContext } from "./context/TripsContext";

export default function Provider(props: PropsWithChildren<any>) {
  return (
    <DarkModeContext>
      <TripsContext>{props.children}</TripsContext>{" "}
    </DarkModeContext>
  );
}
