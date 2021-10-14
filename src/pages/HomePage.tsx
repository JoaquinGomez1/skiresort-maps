import Map from "../components/Map";
import { ScrollableItem, ScrollableList } from "../components/ScrollableList";

const dataItems: ScrollableItem[] = [
  {
    iconClassName: "fas fa-envelope",
    name: "Lodging",
    isActive: true,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: false,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: true,
  },
  {
    iconClassName: "fas fa-truck",
    name: "Tickets",
    isActive: false,
  },
];

export default function Home() {
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
            <ScrollableList items={dataItems} />
          </div>
        </div>
        <div className="md:w-1/2">
          <Map />
        </div>
      </div>
    </div>
  );
}
