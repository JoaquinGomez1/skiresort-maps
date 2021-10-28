// TODO: Delete all of this file's references when an api is set up

import Features from "../interfaces/Features";
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
    features: [Features.LODGING, Features.SKI_ITEMS],
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
    features: [Features.TICKETS, Features.LODGING],
  },
  {
    id: "3",
    imageUrl: [
      "https://powderquest.com/wp-content/uploads/las-lenas-resort.jpg",
      "https://purewows3.imgix.net/images/articles/2019_12/best-ski-resorts-in-the-world-whistler.jpg?auto=format,compress&cs=strip",
      "https://visitutahkenticoprod.blob.core.windows.net/cmsroot/visitutah/media/site-assets/winter-photography/ski-resorts/powder-mountain/ski-resorts_powdermountain_adamclark_2020-15_large_1.jpg",
      "https://i1.wp.com/www.agoda.com/wp-content/uploads/2020/01/Best-US-ski-resorts-Squaw-Valley-Resort-California.jpg?ssl=1",
    ],
    isFavorite: false,
    capacity: 4,
    price: 400,
    location: { lat: 1, lng: 1 },
    locationName: "Utah",
    name: "Utah Ski Park",
    reviews: 84,
    rating: 4.8,
    features: [Features.BREAKFAST, Features.LODGING, Features.SKI_ITEMS],
  },
  {
    id: "4",
    imageUrl: [
      "https://powderquest.com/wp-content/uploads/las-lenas-resort.jpg",
    ],
    isFavorite: false,
    capacity: 4,
    price: 400,
    location: { lat: 1, lng: 1 },
    locationName: "Utah",
    name: "Laguna mar chikito",
    reviews: 84,
    rating: 4.8,
    features: [Features.BREAKFAST, Features.SKI_ITEMS],
  },
];

export default SkiTrips;
