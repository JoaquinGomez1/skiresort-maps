export default function SearchBar() {
  return (
    <div className="flex px-3 py-1 dark:bg-darker bg-light text-gray-400 rounded-full w-full">
      <input
        placeholder="Search..."
        className="dark:bg-darker bg-light outline-none w-full"
        type="text"
      />
      <div className="dark:bg-light bg-gray-500 p-1 text-white rounded-full px-2 cursor-pointer hover:bg-gray-600">
        <i className="fas fa-search" />
      </div>
    </div>
  );
}
