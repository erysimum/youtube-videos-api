import React from "react";
import VideoItem from "./VideoItem";

/* const VideoList = (props) => {
  return <div>{props.videos.length}</div>;
};
 */

const VideoList = ({ videos, onSelectedVideo }) => {
  /* return <div>{videos.length}</div>; */
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onSelectedVideo={onSelectedVideo}
        video={video}
      />
    );
  });

  return <div className='ui list'>{renderedList}</div>;
};

export default VideoList;
