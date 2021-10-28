import { PropsWithoutRef, useState } from "react";

interface ImageCarouselProps {
  imagesArray: string[];
}

export default function ImageCarousel({
  imagesArray,
}: PropsWithoutRef<ImageCarouselProps>) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const changeSelectedIndex = (e: any, index: number) => {
    e.preventDefault();
    setSelectedImageIndex(index);
  };

  return (
    <div className="overflow-hidden block rounded-md w-full h-full relative overflow-y-hidden">
      <div className="absolute w-full h-full">
        {imagesArray.length >= 2 && (
          <div className="absolute bottom-0 w-full h-8 bg-gradient-to-t from-white to-transparent opacity-50"></div>
        )}
        <div className="absolute flex justify-center w-full bottom-0 space-x-1 ">
          {imagesArray.length >= 2 &&
            imagesArray.map((x, index) => {
              const isActive = index === selectedImageIndex;
              const activeStyle = isActive
                ? "opacity-80"
                : "text-darker opacity-30";
              return (
                <div
                  className="bottom-0 left-0 right-0 "
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={(e) => changeSelectedIndex(e, index)}
                >
                  <i
                    className={`fas fa-circle text-xs cursor-pointer text-darker transition-opacity duration-200 ${activeStyle}`}
                  ></i>
                </div>
              );
            })}
        </div>
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
