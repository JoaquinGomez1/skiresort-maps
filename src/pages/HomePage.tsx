import Map from "../components/Map";
import ScrollableFilters, {
  ScrollableItem,
} from "../components/ScrollableList";
import TripCard from "../components/TripCard";
import useTrips from "../context/TripsContext";

const dataItems: ScrollableItem[] = [
  {
    iconClassName: "fas fa-envelope",
    name: "Lodging",
    isActive: false,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: false,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: false,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: false,
  },
];

export default function Home() {
  const { trips } = useTrips();
  return (
    <div className=" dark:text-white px-6 py-4 text-sm w-full h-full">
      <div className="md:flex w-full h-full">
        <div className="md:w-1/2 h-full">
          <div>
            <p className="text-light">
              10 stats <span className="mx-4">May 21 - 22</span> 2 guests
            </p>
            <h2 className="text-2xl font-bold my-4">
              Ski in selected map area
            </h2>
          </div>
          <div className="my-2 flex justify-between items-center">
            <p className="text-lg font-bold">Filters</p>
            <p className="text-xs font-bold uppercase text-accent ">
              More Filters
            </p>
          </div>
          <div className="my-6">
            <ScrollableFilters items={dataItems} />
          </div>
          <div className="block w-full space-y-6">
            {trips.map((each) => {
              return <TripCard key={each.id} trip={each} />;
            })}
          </div>
        </div>
        <div className="md:w-1/2">
          <Map />
        </div>
      </div>
    </div>
  );
}
