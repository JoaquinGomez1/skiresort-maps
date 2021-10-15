import { Coords } from "google-map-react";

interface LocationFull {
  latitude: number;
  longitude: number;
}

interface LocationShort extends Coords {
  lat: number;
  lng: number;
}

// This way you can use either the short or full names
type Location = LocationFull | LocationShort | Coords;
export default Location;
