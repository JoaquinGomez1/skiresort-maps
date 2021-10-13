interface PillProps {
  imageUrl: string;
  name: string;
  action?: () => void;
}

export default function Pill({ imageUrl, name, action }: PillProps) {
  return (
    <div
      className="flex items-center cursor-pointer text-sm hover:bg-gray-700 py-1 rounded-sm select-none space-x-4 px-3 justify-between"
      onClick={action}
    >
      <div className="flex space-x-2 items-center">
        <img className="rounded-full w-6 h-6" src={imageUrl} alt={name} />
        <p className="text-light">{name}</p>
      </div>
      <i className="fas fa-caret-down dark:text-light"></i>
    </div>
  );
}
