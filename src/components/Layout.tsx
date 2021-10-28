import Sidebar from "./Sidebar";
import sidebarItems from "../constants/sidebarItems";
import { PropsWithChildren } from "react";

interface LayoutProps {}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className="flex w-full">
      <Sidebar items={sidebarItems}></Sidebar>
      <div className="pt-4 overflow-auto w-screen text-primary dark:text-white">
        <div>{props.children}</div>
      </div>
    </div>
  );
}
