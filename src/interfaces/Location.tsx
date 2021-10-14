interface LocationFull {
  latitude: number;
  longitude: number;
}

interface LocationShort {
  lat: number;
  long: number;
}

// This way you can use either the short or full names
type Location = LocationFull | LocationShort;
export default Location;
