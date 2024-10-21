import React from "react";
import YouTube from "react-youtube";

const YouTubeVideo = () => {
  const videoId = "urKwcBAfHkE";
  // 유튜브 영상 id

  const onPlayerReady = (event) => {
    event.target.pauseVideo();
    // 영상 로드 후 자동 재생 방지
  };

  return (
    <div className="y-viedo">
      <YouTube videoId={videoId} onReady={onPlayerReady} />
    </div>
  );
};

export default YouTubeVideo;
