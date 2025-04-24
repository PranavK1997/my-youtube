import React from "react";

const formatViewCount = (num) => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
};

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out cursor-pointer">
      <img
        className="rounded-t-xl"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="p-2">
        <h2 className="font-semibold text-sm line-clamp-2">{title}</h2>
        <p className="text-gray-600 text-sm">{channelTitle}</p>
        <p className="text-gray-500 text-sm">
          {formatViewCount(statistics.viewCount)} views
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
