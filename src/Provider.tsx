import { PropsWithChildren } from "react";
import { TripsContext } from "./context/TripsContext";

export default function Provider(props: PropsWithChildren<any>) {
  return <TripsContext>{props.children}</TripsContext>;
}
