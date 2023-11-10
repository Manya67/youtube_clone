import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "../../../utils/constants";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    console.log(json.items[0].snippet);
    setVideos(json.items);
  };
  return (
    // <div>
    //   {videos == null ? (
    //     <span>ERR!</span>
    //   ) : (
    //     videos.map((video) => {
    //       return <VideoCard info={video} key={video.id} />;
    //     })
    //   )}
    // </div>
    <>
      {videos == null ? (
        <span>err</span>
      ) : (
        <VideoCard info={videos[0]} key={videos[0].id} />
      )}
    </>
  );
};

export default VideoContainer;
