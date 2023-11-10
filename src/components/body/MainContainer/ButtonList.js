import React from "react";
import ButtonCard from "./ButtonCard";

const ButtonList = () => {
  const buttonList = ["All", "Music", "Live", "News"];
  return (
    <div className="flex gap-2 m-3">
      {buttonList.map((btn) => {
        return <ButtonCard data={btn} key={btn} />;
      })}
    </div>
  );
};

export default ButtonList;
