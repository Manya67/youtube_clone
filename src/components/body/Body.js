import React from "react";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";

const Body = () => {
  return (
    <>
      <Header />
      <div className="flex gap-2 h-[95vh] ">
        <Sidenav />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
