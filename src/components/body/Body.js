import React from "react";
import Sidenav from "./Sidenav";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-2">
      <Sidenav />
      <Outlet />
    </div>
  );
};

export default Body;
