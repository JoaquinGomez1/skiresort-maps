export interface ScrollableItem {
  iconClassName: string;
  name: string;
  isActive: boolean;
}

export function ScrollableList({ items }: { items: ScrollableItem[] }) {
  return (
    <div className="flex space-x-4 overflow-x-scroll w-full bg-scroll no-scrollbar">
      {items.map((each) => (
        <div
          className={`p-2 px-4 flex items-center cursor-pointer select-none ${
            each.isActive ? "bg-darker" : "border-darker border"
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
