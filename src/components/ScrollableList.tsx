import { useState } from "react";
import Features from "../interfaces/Features";

export interface ScrollableItem {
  iconClassName: string;
  name: Features;
  isActive: boolean;
}

interface ScrollableFiltersProps {
  items: ScrollableItem[];
  onItemClicked?: (name: Features, wasSelected: boolean) => void;
}

export default function ScrollabeFilters({
  items,
  onItemClicked,
}: ScrollableFiltersProps) {
  const [itemsList, setItemsList] = useState<Array<ScrollableItem>>(
    items ?? []
  );

  const setActive = (index: number) => {
    // Update array value and trigger a re render
    const toogleValue = !itemsList[index].isActive;
    itemsList[index].isActive = toogleValue;
    const wasSelected = toogleValue;

    console.log({ wasSelected });
    setItemsList([...itemsList]);
    if (onItemClicked) onItemClicked(itemsList[index].name, wasSelected);
  };

  return (
    <div className="flex space-x-4 overflow-x-scroll w-full bg-scroll no-scrollbar">
      {itemsList.map((each, index) => (
        <div
          onClick={() => setActive(index)}
          className={`p-2 px-4 flex items-center cursor-pointer select-none border dark:border-darker hover:bg-gray-200 dark:hover:bg-darker-light ${
            each.isActive
              ? "dark:bg-darker  dark:hover:bg-darker-dark bg-gray-100 "
              : "hover:bg-darker-light "
          } rounded-md space-x-2 `}
        >
          <div
            className={`${
              each.isActive ? "bg-accent" : "bg-darker "
            } rounded-full px-3 py-2 flex items-center justify-center`}
          >
            <i className={`${each.iconClassName} text-white`} />
          </div>
          <p className="uppercase text-xs">{each.name}</p>
        </div>
      ))}
    </div>
  );
}
