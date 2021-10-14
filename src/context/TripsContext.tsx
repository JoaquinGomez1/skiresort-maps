import { createContext, PropsWithChildren, useContext, useState } from "react";
import SkiTrips from "../constants/skiTrips";
import SkiTrip from "../interfaces/SkiTrip";

interface TripsContextProviderInterface {
  trips: SkiTrip[];
  setTrips: React.Dispatch<React.SetStateAction<SkiTrip[]>>;
  areTripsLoading: boolean;
  setAreTripsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TripsContextProvider =
  createContext<TripsContextProviderInterface>(undefined!);

export function TripsContext(props: PropsWithChildren<any>) {
  const [trips, setTrips] = useState<SkiTrip[]>(SkiTrips);
  const [areTripsLoading, setAreTripsLoading] = useState(true);

  return (
    <TripsContextProvider.Provider
      value={{ trips, setTrips, areTripsLoading, setAreTripsLoading }}
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
