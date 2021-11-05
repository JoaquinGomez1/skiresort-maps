import Location from "./Location";

export default interface Trip {
  id: string;
  name: string;
  imageUrl: string[];
  location: Location;
  locationName: string;
  price: number;
  description: string;
}
