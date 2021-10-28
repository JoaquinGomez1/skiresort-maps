import { useState } from "react";
import { Link } from "react-router-dom";
import Map from "../components/Map";
import PageHeader from "../components/PageHeader";
import ScrollableFilters, {
  ScrollableItem,
} from "../components/ScrollableList";
import TripCard from "../components/TripCard";
import useTrips from "../context/TripsContext";
import Features from "../interfaces/Features";
import SkiTrip from "../interfaces/SkiTrip";

const dataItems: ScrollableItem[] = [
  {
    iconClassName: "fas fa-envelope",
    name: Features.LODGING,
    isActive: false,
  },
  {
    iconClassName: "fas fa-check",
    name: Features.TICKETS,
    isActive: false,
  },
  {
    iconClassName: "fas fa-truck",
    name: Features.SKI_ITEMS,
    isActive: false,
  },
  {
    iconClassName: "fas fa-coffee",
    name: Features.BREAKFAST,
    isActive: false,
  },
];

export default function Home() {
  const { trips } = useTrips();
  const [scopedTrips, setScopedTrips] = useState<SkiTrip[]>(trips);

  const toogleFavorite = (e: any, trip: SkiTrip) => {
    e.preventDefault();
    const tripsCopy = [...scopedTrips];
    const indexFound = tripsCopy.findIndex((each) => each.id === trip.id);

    if (indexFound < 0) return;

    const selectedTrip = tripsCopy[indexFound];
    selectedTrip.isFavorite = !selectedTrip.isFavorite;
    setScopedTrips([...tripsCopy]);
  };

  const filterTrips = (name: Features, wasSelected: boolean) => {
    const tripsCopy = wasSelected ? [...scopedTrips] : [...trips];
    const filter =
      wasSelected && tripsCopy.filter((x) => x.features?.includes(name));

    setScopedTrips(filter ? [...filter] : [...trips]);
  };

  return (
    <div className="px-6">
      <PageHeader />
      <div className=" dark:text-white py-4 text-sm w-full ">
        <div className="flex flex-col lg:flex-row space-y-12 lg:space-x-12">
          <div className="w-full h-full">
            <div>
              <p className="text-light">
                10 stats <span className="mx-4">May 21 - 22</span> 2 guests
              </p>
              <h2 className="text-2xl font-bold my-4">
                Ski in selected map area
              </h2>
            </div>
            <div className="my-2">
              <p className="text-lg font-bold">Filters</p>
            </div>
            <div className="my-6">
              <ScrollableFilters
                items={dataItems}
                onItemClicked={filterTrips}
              />
            </div>
            <div className="block w-full space-y-6">
              {scopedTrips.length >= 1 &&
                scopedTrips.map((each) => {
                  return (
                    <Link to={`/trips/${each.id}`} className="block">
                      <TripCard
                        key={each.id}
                        trip={each}
                        onButtonClick={toogleFavorite}
                        redirectUrl={`/rips/${each.id}`}
                      />
                    </Link>
                  );
                })}
              {scopedTrips.length <= 0 && (
                <p className="text-center text-2xl text-accent">
                  No trips found
                </p>
              )}
            </div>
          </div>
          <div className=" w-full h-layout-screen rounded-lg">
            <Map className="rounded-lg overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
