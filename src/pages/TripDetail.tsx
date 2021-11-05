import { useState } from "react";
import { RouteComponentProps } from "react-router";
import CustomMarker from "../components/CustomMarker";
import ImageCarousel from "../components/ImageCarousel";
import Map from "../components/Map";
import useTrips from "../context/TripsContext";

interface TripDetailParams {
  id: string;
}

export default function TripDetail({
  match,
}: RouteComponentProps<TripDetailParams>) {
  const { tripsFunctions } = useTrips();
  const [trip] = useState(tripsFunctions.getTripById(match.params?.id));

  return (
    <div className="px-6 min-h-screen ">
      <div className="md:flex space-y-6 md:space-y-0">
        <div className="w-full">
          <h2 className="text-2xl capitalize">{trip.name}</h2>
          <div className="overflow-ellipsis overflow-hidden w-3/4 my-6 ">
            <p className="text-light line-clamp-6">{trip.description}</p>
          </div>
          <div className="w-96 h-96">
            <ImageCarousel imagesArray={trip.imageUrl} />
          </div>
        </div>
        <div className="w-full h-layout-screen rounded-md overflow-hidden">
          <Map zoom={14} center={trip.location}>
            <CustomMarker lat={trip.location.lat} lng={trip.location.lng} />
          </Map>
        </div>
      </div>
    </div>
  );
}
