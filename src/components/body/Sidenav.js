import React from "react";
import { useSelector } from "react-redux";

const Sidenav = () => {
  const menuOpen = useSelector((store) => store.menu.isMenuOpen);
  if (!menuOpen) return null;
  return (
    <div className="gap-2 w-[10%] py-2 flex justify-center items-center flex-col border border-red-600">
      <div className="border-b-2 border-gray-600">
        <h3></h3>
        <ul className="px-2">
          <li>Home</li>
          <li>Shorts</li>
          <li>Subscription</li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-600">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
      <div className="border-b-2 border-gray-600">
        <ul>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
