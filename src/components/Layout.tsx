import Sidebar from "./Sidebar";
import sidebarItems from "../constants/sidebarItems";
import { PropsWithChildren } from "react";
import PageHeader from "./PageHeader";

interface LayoutProps {}

export default function Layout(props: PropsWithChildren<LayoutProps>) {
  return (
    <div className="flex w-full">
      <Sidebar items={sidebarItems}></Sidebar>
      <div className="flex flex-col overflow-hidden pt-4 w-screen">
        <PageHeader />
        <div className="page-full h-screen">{props.children}</div>
      </div>
    </div>
  );
}
