import React, { useCallback, useRef } from "react";
import { FaBars, FaGithub, FaSearch, FaSlack } from "react-icons/fa";

interface HeaderProps {
  sidebarCollapseState: boolean;
  sidebarCollapseAction: (boolean) => boolean;
}

// Two ways for setter method, both will work
// type HeaderProps = {
//   sidebarCollapseState: boolean;
//   sidebarCollapseAction: React.Dispatch<React.SetStateAction<boolean>>;
// };

export const Header: React.FunctionComponent<
  React.PropsWithChildren<HeaderProps>
> = ({ sidebarCollapseState, sidebarCollapseAction }) => {
  const headerOptionIconClassList = "text-white hover:text-zinc-400";
  const headerOptions = useRef([
    {
      optionName: "GitHub",
      icon: <FaGithub className={headerOptionIconClassList} />,
    },
    {
      optionName: "Join Slack",
      icon: <FaSlack className={headerOptionIconClassList} />,
    },
  ]);

  const toggleSidebar = useCallback(() => {
    sidebarCollapseAction(!sidebarCollapseState);
  }, [sidebarCollapseAction, sidebarCollapseState]);

  return (
    <div
      className="header-container w-full h-fit px-6 py-4 border-b-2 border-b-zinc-800
      flex flex-row items-center justify-between
    "
    >
      <div className="logo-sidebar-action-wrapper flex flex-row items-center justify-start gap-3">
        <button
          className="p-2 rounded-md text-white font-normal text-sm bg-transparent hover:bg-white hover:bg-opacity-20 transition-all"
          onClick={toggleSidebar}
        >
          <FaBars />
        </button>
        <div className="logo-title-wrapper cursor-pointer select-none text-white flex flex-row items-center justify-start gap-1">
          <span className="font-semibold text-lg">Invoicetor</span>
          {"/"}
          <span className="text-sm">Dashboard</span>
        </div>
      </div>
      <div className="search-input-wrapper flex flex-row items-center justify-center gap-1">
        <input
          type="text"
          className="w-[460px] h-fit px-3 py-1.5 rounded-md border border-transparent bg-zinc-800 placeholder:text-zinc-600 text-white font-semibold text-sm"
          placeholder="Search for invoices, templates"
        />
        <button
          className="px-3 py-1.5 rounded-md border border-transparent bg-purple-700 hover:bg-purple-800 
          text-white font-semibold text-sm flex flex-row items-center justify-center gap-1
        "
        >
          {"Search"} <FaSearch className="text-xs" />
        </button>
      </div>
      <div className="header-options-wrapper w-fit h-fit">
        <ul className="header-options-list-wrapper flex flex-row items-center justify-end gap-3">
          {headerOptions.current?.map((headerOption, headerOptionIndex) => (
            <li
              className="header-option-item"
              id={headerOption?.optionName}
              key={headerOptionIndex}
              title={headerOption?.optionName}
            >
              {headerOption?.icon}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
