import React from "react";
import Logo from "./Logo";
import Search from "./Search";
import Profile from "./Profile";

const Header = () => {
  return (
    <div className="flex justify-center items-center px-1 py-2 border border-gray-400 ">
      <Logo className="" />
      <Search className="" />
      <Profile className="" />
    </div>
  );
};

export default Header;
