import { useState } from "react";

export interface ScrollableItem {
  iconClassName: string;
  name: string;
  isActive: boolean;
}

export default function ScrollabeFilters({
  items,
}: {
  items: ScrollableItem[];
}) {
  const [itemsList, setItemsList] = useState<Array<ScrollableItem>>(
    items ?? []
  );

  const setActive = (index: number) => {
    // Update array value and trigger a re render
    itemsList[index].isActive = !itemsList[index].isActive;
    setItemsList([...itemsList]);
  };

  return (
    <div className="flex space-x-4 overflow-x-scroll w-full bg-scroll no-scrollbar">
      {itemsList.map((each, index) => (
        <div
          onClick={() => setActive(index)}
          className={`p-2 px-4 flex items-center cursor-pointer select-none border border-darker ${
            each.isActive ? "bg-darker" : ""
          } rounded-md space-x-2 `}
        >
          <div
            className={`${
              each.isActive ? "bg-accent" : "bg-darker"
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
