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
    location: { lat: -31.428583825397656, lng: -64.197566087082 },
    locationName: "Beijing",
    name: "say my name",
    reviews: 188,
    rating: 4.3,
    description:
      "Occaecat tempor duis sunt minim anim nulla exercitation et. Nulla excepteur dolor ad irure proident nisi. Sunt deserunt laborum enim commodo voluptate dolore est est culpa commodo. Esse excepteur quis deserunt Lorem dolor elit adipisicing.Nostrud tempor eiusmod elit ea. Quis enim eu aliqua adipisicing pariatur voluptate dolore laborum veniam ex dolor. Lorem deserunt Lorem velit sint quis eu velit. Id id voluptate non laborum aute et non est.",
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
    location: { lat: -31.4365941886682, lng: -64.18548739665168 },
    locationName: "Bariloche",
    name: "Patagonia",
    rating: 3.9,
    reviews: 168,
    description:
      "Incididunt proident reprehenderit et Lorem in ea cupidatat incididunt officia Lorem aliqua. Est non mollit incididunt id consequat. Anim cillum aliquip qui id consectetur nulla cillum adipisicing fugiat cupidatat quis consequat. Enim ipsum ipsum enim consectetur qui reprehenderit anim duis.",
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
    location: { lat: -31.34693455523378, lng: -64.3646057928293 },
    locationName: "Utah",
    name: "Utah Ski Park",
    reviews: 84,
    rating: 4.8,
    features: [Features.BREAKFAST, Features.LODGING, Features.SKI_ITEMS],
    description: `
      Aliquip in eiusmod ad consectetur adipisicing esse quis consectetur deserunt labore officia fugiat dolor. Minim labore sint voluptate ea cillum voluptate aliquip enim et proident cupidatat occaecat. Ullamco aliqua mollit laboris labore ut sit sunt pariatur exercitation eu mollit mollit reprehenderit. Elit magna veniam ea irure fugiat sint. Excepteur cillum proident cillum et ea enim eiusmod est non fugiat sint irure.
      Exercitation dolor fugiat esse magna dolor laboris exercitation incididunt culpa. Sunt ipsum reprehenderit cillum laboris adipisicing ex laboris ipsum in esse officia. Ex adipisicing officia voluptate nisi eu in ad esse eiusmod ipsum velit eu deserunt nisi. Enim ea et deserunt sunt enim laboris adipisicing mollit ea commodo exercitation aliqua dolor. Eu esse id nulla deserunt dolore do eiusmod proident. Id eu ex exercitation cupidatat mollit et. Labore veniam occaecat et ipsum non in quis eu fugiat.
      Aute ullamco veniam dolor laborum. Aute qui aliqua culpa velit amet eiusmod nulla dolore. Dolor ipsum aliqua consectetur est Lorem tempor dolor culpa commodo sunt culpa ex commodo anim.
      Consectetur dolor proident nostrud ad voluptate aliqua. Incididunt est tempor excepteur velit laboris laborum. Amet quis incididunt irure consequat minim laborum esse ullamco ex. Amet tempor consequat nostrud esse cupidatat commodo cupidatat exercitation officia duis dolor. Irure duis aliquip minim mollit sunt mollit esse.
    `,
  },
  {
    id: "4",
    imageUrl: [
      "https://powderquest.com/wp-content/uploads/las-lenas-resort.jpg",
    ],
    isFavorite: false,
    capacity: 4,
    price: 400,
    location: { lat: -31.790776539704822, lng: -64.50512048104943 },
    locationName: "Utah",
    name: "Laguna mar chikita",
    reviews: 84,
    rating: 4.8,
    features: [Features.BREAKFAST, Features.SKI_ITEMS],
    description:
      "Aliquip aute ipsum magna eiusmod consectetur dolor aliquip labore velit. Aliquip proident consectetur occaecat minim laborum dolor qui. Proident irure eiusmod laboris deserunt.",
  },
];

export default SkiTrips;
