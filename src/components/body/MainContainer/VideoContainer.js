import React, { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
    // console.log(videos);
  };

  return (
    <div className="h-full w-full cards">
      {videos == null ? (
        <span>err</span>
      ) : (
        <>
          {videos.map((video) => {
            return (
              <Link to={`/watch/${video.id}`} key={video.id}>
                <VideoCard info={video} />
              </Link>
            );
          })}
        </>
      )}
    </div>
  );
};

export default VideoContainer;
