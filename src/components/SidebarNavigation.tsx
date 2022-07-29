import React, { useRef } from "react";
import { FaConnectdevelop, FaHome, FaMoneyBill, FaSearch } from "react-icons/fa";

interface SidebarNavigationProps {
  currentView: string;
  isSidebarCollapsable: boolean;
}

export const SidebarNavigation: React.FunctionComponent<React.PropsWithChildren<SidebarNavigationProps>> = ({ 
  currentView, 
  isSidebarCollapsable
}) => {

  
  const SidebarViews = useRef([
    {
      viewTitle: "Home",
      viewIcon: <FaHome />
    },
    {
      viewTitle: "Explore",
      viewIcon: <FaSearch />
    },
    {
      viewTitle: "Plans",
      viewIcon: <FaMoneyBill />
    },
    {
      viewTitle: "Integrations",
      viewIcon: <FaConnectdevelop />
    }
  ]); 

  if (isSidebarCollapsable) {
    return (
      <div className="sidebar-navigation-wrapper sidebar-closed w-fit border-r-2 border-zinc-800 px-3 py-6 h-[86vh]">
        <ul className="sidebar-navigation-list-wrapper flex flex-col items-center gap-4">
          {SidebarViews.current?.map((sidebarView, sidebarViewIndex) => (
            <li key={sidebarViewIndex}
              className="sidebar-navigation-item"
            >
              <span className="sidebar-navigation-item-content-wrapper">
                <button className="sidebar-navigation-option-icon-button flex flex-row items-center justify-center p-2
                  bg-transparent hover:bg-white hover:bg-opacity-30 text-white rounded-md"
                >
                  {sidebarView?.viewIcon}
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="sidebar-navigation-wrapper sidebar-opened w-fit border-r-2 border-zinc-800 px-3 py-6 h-[86vh]">
        <ul className="sidebar-navigation-list-wrapper flex flex-col items-start gap-4">
          {SidebarViews.current?.map((sidebarView, sidebarViewIndex) => (
            <li key={sidebarViewIndex}
              className="sidebar-navigation-item"
            >
              <span className="sidebar-navigation-item-content-wrapper">
                <button className="sidebar-navigation-option--button flex flex-row items-center justify-center px-2 py-2 
                  bg-transparent hover:bg-white hover:bg-opacity-30 gap-2 text-white rounded-md"
                >
                  <span className="sidebar-option-icon-wrapper">{sidebarView?.viewIcon}</span>
                  <span className="sidebar-option-title-wrapper font-semibold text-sm">{sidebarView?.viewTitle}</span>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};
