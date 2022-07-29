import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header.tsx";
import { SidebarNavigation } from "./components/SidebarNavigation.tsx";
import { Home } from "./screens/Home.tsx";

export default function App() {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  // const [currentTabVeiw, setCurrentTabView] = useState("/");

  return (
    <div className="app">
      <Header
        sidebarCollapseState={sidebarCollapse}
        sidebarCollapseAction={setSidebarCollapse}
      />
      <div className="dashboard-content-layout-wrapper flex flex-row items-start justify-start gap-4">
        <SidebarNavigation isSidebarCollapsable={sidebarCollapse} />
        <div className="app-view-container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
