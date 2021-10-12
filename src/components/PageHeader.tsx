import Pill from "./Pill";

export default function PageHeader() {
  return (
    <div className="flex flex-grow justify-between items-center h-16 px-4">
      <div className="flex px-3 py-1 bg-gray-500 text-gray-400 rounded-full">
        <div className="flex items-center">
          <p className="mr-2">Location |</p>
          <p className="mr-2">Location |</p>
          <p className="mr-2">Location</p>
        </div>
        <div className="bg-gray-600 p-1 text-white rounded-full px-2">
          <i className="fas fa-search"></i>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Pill
          name="USD"
          imageUrl="https://www.banderas-mundo.es/data/flags/emoji/facebook/256x256/us.png"
        />
        <Pill
          name="Julia"
          imageUrl="https://randomuser.me/api/portraits/women/3.jpg"
        />
        <div className="w-8 h-8 grid items-center justify-center dark:text-white mr-2  ">
          <i className="fas fa-bell"></i>
        </div>
      </div>
    </div>
  );
}
