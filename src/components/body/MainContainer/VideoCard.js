import React from "react";

const VideoCard = ({ info }) => {
  // const { title, tumbnails } = snippet;
  console.log(info.snippet.thumbnails.medium.url);
  return (
    <div>
      <img src={info.snippet.thumbnails.medium.url} alt="tumbnail" />
      check{" "}
    </div>
  );
};

export default VideoCard;
