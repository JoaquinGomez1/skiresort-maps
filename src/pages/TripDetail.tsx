import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import useTrips from "../context/TripsContext";

export default function TripDetail() {
  const { trips } = useTrips();
  const [trip, setStrip] = useState(trips[2]);

  return (
    <div>
      <h2>Trip detail</h2>
      <div className="w-56 h-56 ">
        <ImageCarousel imagesArray={trip.imageUrl}></ImageCarousel>
      </div>
    </div>
  );
}
