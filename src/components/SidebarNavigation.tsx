import React from "react";

interface SidebarNavigationProps {
  currentView: string;
  isSidebarCollapsable: boolean;
}

export const SidebarNavigation: React.FunctionComponent<
  React.PropsWithChildren<SidebarNavigationProps>
> = ({ currentView, isSidebarCollapsable }) => {
  if (isSidebarCollapsable) {
    return <div className="sidebar-navigation-wrapper bg-zinc-800">Closed</div>;
  } else {
    return (
      <div className="sidebar-navigation-wrapper bg-zinc-800 w-[260px] h-fit">
        Opened
      </div>
    );
  }
};
