import React from "react";
import WhatsNewFeatured from "../components/WhatsNewFeatured";

export const Home: React.FunctionComponent = () => {
  return (
    <div className="home-screen-view flex flex-row w-full items-start justify-between">
      <div className="home-screen-content-wrapper">
        <h1 className="leading-snug text-lg text-white font-semibold">
          Home
        </h1>
      </div>
      <WhatsNewFeatured />
    </div>
  );
};
