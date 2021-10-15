import Pill from "./Pill";

export default function PageHeader() {
  return (
    <div className="flex flex-grow justify-between items-center h-16 px-4">
      <div className="flex px-3 py-1 bg-darker text-gray-400 rounded-full">
        <input
          placeholder="Search..."
          className="bg-darker outline-none w-full"
          type="text"
        />
        <div className="bg-light p-1 text-white rounded-full px-2">
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
        <div className="w-8 h-8 grid items-center justify-center dark:text-white ml-2 ">
          <i className="fas fa-bell text-light"></i>
        </div>
      </div>
    </div>
  );
}
