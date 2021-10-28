import Features from "./Features";
import Trip from "./Trip";

export default interface SkiTrip extends Trip {
  isFavorite: boolean;
  rating: number;
  capacity: number;
  reviews?: number;
  features?: Features[];
}
