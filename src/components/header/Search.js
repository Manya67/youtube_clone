import React from "react";
import { SearchIcon } from "../../utils/icons";

const Search = () => {
  return (
    <div className="w-full flex justify-center">
      <input
        type="text"
        className="border border-gray-600 w-[80%] rounded-l-xl px-2"
        placeholder="Search"
      />
      <div className="border border-gray-600 rounded-r-xl px-2">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Search;
