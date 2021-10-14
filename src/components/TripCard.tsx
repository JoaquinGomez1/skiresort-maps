import { PropsWithoutRef, useState } from "react";
import SkiTrip from "../interfaces/SkiTrip";
import DetermineRatingName from "../lib/DetermineRatingName";

interface TripCardProps {
  trip: SkiTrip;
  onButtonClick?: (id: string) => void;
}

export default function TripCard({
  trip,
  onButtonClick,
}: PropsWithoutRef<TripCardProps>) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  return (
    <div className="bg-darker w-full px-4 py-2 rounded-md flex space-x-4 flex-1">
      <div className="overflow-hidden object-contain rounded-md w-36 h-full ">
        <img
          className="h-full"
          src={trip.imageUrl[selectedImageIndex]}
          alt={`${trip.name} image`}
        />
      </div>

      {/* ------ Card Header and Favorite button ------ */}

      <div className="grid w-full space-y-2">
        <div className="flex justify-between items-center">
          <div className="w-full overflow-ellipsis grid items-start">
            <h3 className="text-lg font-bold dark:text-white text-darker capitalize">
              {trip.name}
            </h3>
            {trip.capacity > 0 && (
              <p className="text-light text-sm">{`${trip.capacity} Guests`}</p>
            )}
          </div>
          <button
            onClick={() => onButtonClick && onButtonClick(trip.id)}
            className={`${
              trip.isFavorite
                ? "bg-pink-500 text-white"
                : "bg-light text-darker"
            } px-2 py-2 rounded-full flex items-center`}
          >
            <i className="fas fa-heart "></i>
          </button>
        </div>

        {/* ------ Stars count ------ */}

        <div className="space-x-2 flex items-center">
          <i className="fas fa-star text-yellow-400"></i>
          <p className="text-gray-400">{`${trip.rating.toPrecision(2)}`}</p>
        </div>

        {/* ------ Reviews and total ------ */}

        <div className="flex justify-between items-center">
          <p className="space-x-2">
            <span>
              <i className="fas fa-binoculars text-sm text-light" />
            </span>
            <span className="text-light">{trip.rating.toPrecision(2)} / 5</span>
            <span className="ml-2"> {DetermineRatingName(trip.rating)}</span>
            <span className="text-light">({trip.reviews ?? 0} reviews)</span>
          </p>
          <div>
            <p className="text-lg font-bold">$ {trip.price.toPrecision(3)} </p>
            <p className="text-xs font-normal text-light">per night</p>
          </div>
        </div>
      </div>
    </div>
  );
}
