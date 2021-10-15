import { PropsWithoutRef, useState } from "react";

interface ImageCarouselProps {
  imagesArray: string[];
}

export default function ImageCarousel({
  imagesArray,
}: PropsWithoutRef<ImageCarouselProps>) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const setPreviousImage = () => {
    if (selectedImageIndex <= 0) setSelectedImageIndex(imagesArray.length - 1);
    else setSelectedImageIndex(selectedImageIndex - 1);
  };

  const setNextImage = () => {
    if (selectedImageIndex + 1 > imagesArray.length - 1)
      setSelectedImageIndex(0);
    else setSelectedImageIndex(selectedImageIndex + 1);
  };
  return (
    <div className="overflow-hidden block rounded-md w-full h-full relative overflow-y-hidden">
      <div className="absolute w-full h-full flex">
        <div
          className="w-1/2 bg-black opacity-0 hover:opacity-50 transition-all cursor-pointer"
          onClick={setPreviousImage}
        ></div>
        <div
          className="w-1/2 bg-black opacity-0 hover:opacity-50 transition-all cursor-pointer"
          onClick={setNextImage}
        ></div>
      </div>
      <img
        className="h-full object-cover"
        sizes="300"
        src={imagesArray[selectedImageIndex]}
        alt={`Carousel ${selectedImageIndex}`}
      />
    </div>
  );
}
