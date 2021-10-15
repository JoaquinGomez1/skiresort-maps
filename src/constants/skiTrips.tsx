// TODO: Delete all of this file's references when an api is set up

import SkiTrip from "../interfaces/SkiTrip";

const SkiTrips: SkiTrip[] = [
  {
    id: "1",
    imageUrl: [
      "https://suffrage-pioneers.net/wp-content/uploads/2021/06/6g.jpg",
    ],
    price: 130,
    capacity: 2,
    isFavorite: false,
    location: { lat: 1, lng: 1 },
    locationName: "Beijing",
    name: "say my name",
    reviews: 188,
    rating: 4.3,
  },
  {
    id: "2",
    price: 160,
    imageUrl: [
      "https://www.thebaynet.com/media/photos/gallery/e1176b63-a94c-4658-8217-af4fd10e7f3f.jpg",
      "https://i2-prod.liverpoolecho.co.uk/incoming/article17187385.ece/ALTERNATES/s615/0_Best-Ski-Resort.jpg",
    ],
    capacity: 2,
    isFavorite: true,
    location: { lat: 1, lng: 1 },
    locationName: "Bariloche",
    name: "Patagonia",
    rating: 3.9,
    reviews: 168,
  },
  {
    id: "3",
    imageUrl: [
      "https://powderquest.com/wp-content/uploads/las-lenas-resort.jpg",
    ],
    isFavorite: false,
    capacity: 4,
    price: 400,
    location: { lat: 1, lng: 1 },
    locationName: "Utah",
    name: "Utah Ski Park",
    reviews: 84,
    rating: 4.8,
  },
];

export default SkiTrips;
