import React from "react";

const PlaylistCard = ({ detail }) => {
  console.log(detail);
  return (
    <div>
      <div className="flex flex-row ">
        <img src={detail.snippet.thumbnails.default.url} alt="tumbnail" />
        <h1 className="truncate">{detail.snippet.localized.title}</h1>
        {/* <h3>
          {detail.statistics.likeCount} | {detail.statistics.commentCount}
        </h3> */}
      </div>
    </div>
  );
};

export default PlaylistCard;
