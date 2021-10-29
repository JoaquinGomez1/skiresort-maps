import { useState } from "react";
import ImageCarousel from "../components/ImageCarousel";
import useTrips from "../context/TripsContext";

export default function TripDetail() {
  const { trips } = useTrips();
  const [trip] = useState(trips[2]);

  return (
    <div>
      <h2>Trip detail</h2>
      <div className="w-96 h-96">
        <ImageCarousel imagesArray={trip.imageUrl} />
      </div>
    </div>
  );
}
