import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import SkiTrips from "../constants/skiTrips";
import SkiTrip from "../interfaces/SkiTrip";
import Trip from "../interfaces/Trip";

interface TripsContextProviderInterface {
  trips: SkiTrip[];
  areTripsLoading: boolean;
  setTrips?: React.Dispatch<React.SetStateAction<SkiTrip[]>>;
  setAreTripsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  tripsFunctions: { getTripById: (id: string) => Trip };
}

export const TripsContextProvider =
  createContext<TripsContextProviderInterface>(undefined!);

export function TripsContext(props: PropsWithChildren<any>) {
  const [trips] = useState<SkiTrip[]>(SkiTrips);
  const [areTripsLoading] = useState(true);

  const tripsFunctions = useMemo(
    () => ({
      getTripById: (id: string) => {
        return trips.find((x) => x.id === `${id}`);
      },
    }),
    [trips]
  );

  return (
    <TripsContextProvider.Provider
      value={{ trips, areTripsLoading, tripsFunctions }}
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
