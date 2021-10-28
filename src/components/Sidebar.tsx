import { Link, useLocation } from "react-router-dom";
import { SideBarItem } from "../interfaces/SidebarItem";
import Logo from "./Logo";

interface SideBarProps {
  items: SideBarItem[];
}

export default function Sidebar({ items }: SideBarProps) {
  const location = useLocation();

  return (
    <div className="sticky top-0 hidden sm:flex flex-col w-24 md:w-48 h-screen dark:bg-secondary items-center md:items-start">
      <div className="px-6 pl-8 pr-8 pt-8">
        <Logo />
        <p className="text-gray-600 mt-8 hidden md:block">Menu</p>
      </div>
      <div className="mt-4 flex-grow w-full">
        <div className="grid items-center space-y-2">
          {items.map((each) => {
            const isActive = location?.pathname === each.path;
            const activeClassName = "bg-yellow-500 text-white";
            const defaultClassName = "bg-light text-gray-300";

            return (
              <Link key={each.path} to={each.path}>
                <div className="flex items-center space-x-3 hover:bg-gray-600 py-2 px-8">
                  <div
                    className={`rounded-md text-sm px-2 py-1  ${
                      isActive ? activeClassName : defaultClassName
                    }`}
                  >
                    {each.icon}
                  </div>
                  <p
                    className={`hidden md:block text-sm ${
                      isActive ? "text-white" : "text-light"
                    }`}
                  >
                    {each.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="flex px-6 pb-6 items-center space-x-2 select-none cursor-pointer">
        <div className="p-2 bg-green-600 rounded-full">B</div>
        <p className="text-gray-400 text-sm">Night Mode</p>
      </div>
    </div>
  );
}
