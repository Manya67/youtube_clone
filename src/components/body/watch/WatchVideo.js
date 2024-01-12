import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PLAYLIST_LIST_API, VIDEO_DETAILS_API } from "../../../utils/constants";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../slice/MenuSlice";
import PlaylistCard from "./PlaylistCard";

const WatchVideo = () => {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();

  const [videoDetail, setVideoDetail] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    getVideoDetails();
    dispatch(closeMenu());
  }, []);

  const getVideoDetails = async () => {
    const data = await fetch(VIDEO_DETAILS_API + id);
    const json = await data.json();
    setVideoDetail(json.items);
    if (videoDetail != null) {
      // getPlaylist();
      // console.log(videoDetail);
    }
  };

  useEffect(() => {
    if (videoDetail != null) {
      getPlaylist();
    }
  }, [videoDetail]);

  const getPlaylist = async () => {
    const data = await fetch(
      PLAYLIST_LIST_API + videoDetail[0]?.snippet?.channelId
    );
    const json = await data.json();
    setPlaylist(json.items);
  };

  return (
    <div className="border-2 border-red-200 h-[100%] w-[100%] px-9 py-6 flex">
      {videoDetail == null ? (
        <div>err</div>
      ) : (
        <>
          <div className="h-[100%] w-4/5 flex flex-col gap-5">
            <iframe
              src={`https://www.youtube.com/embed/${id}?autoplay=1`}
              width="1000px"
              height="530px"
              allowFullScreen
              allow="autoplay"
              className="rounded-xl"
            />
            <h1 className="font-bold">{videoDetail[0]?.snippet?.title}</h1>
            <h3>{videoDetail[0]?.snippet?.channelTitle}</h3>
          </div>
          {playlist == null ? (
            <div>err</div>
          ) : (
            <div className="overflow-y-scroll w-[30%] flex flex-col gap-2 border-[1px] border-black p-4">
              {playlist.map((video) => {
                return (
                  <Link to={`/watch/${video.id}`}>
                    <PlaylistCard detail={video} />
                  </Link>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default WatchVideo;
