import { createContext, PropsWithChildren, useContext, useState } from "react";
import SkiTrips from "../constants/skiTrips";
import SkiTrip from "../interfaces/SkiTrip";

interface TripsContextProviderInterface {
  trips: SkiTrip[];
  areTripsLoading: boolean;
  setTrips?: React.Dispatch<React.SetStateAction<SkiTrip[]>>;
  setAreTripsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TripsContextProvider =
  createContext<TripsContextProviderInterface>(undefined!);

export function TripsContext(props: PropsWithChildren<any>) {
  const [trips] = useState<SkiTrip[]>(SkiTrips);
  const [areTripsLoading] = useState(true);

  return (
    <TripsContextProvider.Provider
      value={{ trips, areTripsLoading }}
      {...props}
    >
      {props.children}
    </TripsContextProvider.Provider>
  );
}

export default function useTrips() {
  const tripsContext = useContext(TripsContextProvider);
  if (!tripsContext) throw new Error("Please use this hook inside a provider");

  return tripsContext;
}
