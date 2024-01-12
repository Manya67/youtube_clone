import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useDispatch } from "react-redux";
import { openMenu } from "../../../slice/MenuSlice";

const MainContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(openMenu());
  }, []);
  return (
    <div className=" w-full overflow-y-scroll">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
