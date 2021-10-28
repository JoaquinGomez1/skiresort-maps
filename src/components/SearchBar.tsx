export default function SearchBar() {
  return (
    <div className="flex px-3 py-1 bg-darker text-gray-400 rounded-full w-full">
      <input
        placeholder="Search..."
        className="bg-darker outline-none w-full"
        type="text"
      />
      <div className="bg-light p-1 text-white rounded-full px-2 cursor-pointer hover:bg-gray-500">
        <i className="fas fa-search" />
      </div>
    </div>
  );
}
