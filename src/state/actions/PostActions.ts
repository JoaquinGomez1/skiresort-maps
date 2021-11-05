import SkiTrip from "../../interfaces/SkiTrip";

export default async function fetchTrips(): Promise<SkiTrip> {
  const req = await fetch(process.env.REACT_APP_URL!);
  const res = await req.json();
  return res;
}
