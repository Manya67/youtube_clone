import React from "react";

const VideoCard = ({ info }) => {
  // console.log("called");
  return (
    <div className="card">
      <img src={info.snippet.thumbnails.medium.url} alt="tumbnail" />
      <h1 className="truncate">{info.snippet.localized.title}</h1>
      <h3>
        {info.statistics.likeCount} | {info.statistics.commentCount}
      </h3>
    </div>
  );
};

export default VideoCard;
