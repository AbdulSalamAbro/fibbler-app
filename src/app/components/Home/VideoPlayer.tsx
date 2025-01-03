"use client";
import React, { useEffect, useRef, useState } from "react";
import { MuteIcon, VideoPauseIcon, VideoPlayIcon } from "../Icon";
import { VscUnmute } from "react-icons/vsc";

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true); // State for play/pause
  const [isMuted, setIsMuted] = useState(false); // State for mute/unmute
  const [duration, setDuration] = useState(0); // State for video duration
  const [percentage, setPercentage] = useState(0); // State for progress percentage

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      const handleTimeUpdate = () => {
        setPercentage((video.currentTime / video.duration) * 100);
      };

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      // Add event listeners
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Cleanup event listeners on component unmount
      return () => {
        video.removeEventListener("timeupdate", handleTimeUpdate);
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true); // Update state to true
      } else {
        videoRef.current.pause();
        setIsPlaying(false); // Update state to false
      }
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted); // Update mute state
    }
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (video) {
      const progressBar = event.currentTarget;
      const clickPosition =
        event.clientX - progressBar.getBoundingClientRect().left;
      const progressBarWidth = progressBar.clientWidth;
      const newTime = (clickPosition / progressBarWidth) * duration; // Calculate new currentTime

      video.currentTime = newTime; // Set the video currentTime
      setPercentage((newTime / duration) * 100); // Update percentage state
    }
  };

  return (
    <div className="relative max-w-[1156px] xl:w-full xl:min-w-full  sm:w-[80%] w-[95%] mx-auto  overflow-hidden">
      {" "}
      <video
        ref={videoRef}
        className="w-full h-auto aspect-video -mb-[1px]  border-[3px] sm:border-[5px] border-black rounded-[15px]"
        src={src}
        // poster={poster} //if need thumbnail comment out it
        autoPlay
        style={{ maxHeight: "100vh", objectFit: "cover" }}
      ></video>
      <div className="absolute w-full bottom-0 left-0 z-[52] flex justify-between items-center gap-[10px] sm:gap-[20px] px-[10px] md:px-[30px] py-4">
        <button
          onClick={handlePlayPause}
          className="sm:w-[55px] w-[40px] sm:h-[55px] h-[40px]  bg-[#FB5DA5] rounded-full sm:border-[6px] border-[4px] border-[#FDBEDB] flex justify-center items-center pulse"
        >
          {isPlaying ? <VideoPlayIcon /> : <VideoPauseIcon />}
        </button>

        <div
          className="flex-1 sm:h-[8px] h-[5px] w-full bg-[#181127] rounded-[5px] cursor-pointer"
          onClick={handleProgressBarClick}
        >
          <div
            className="h-full bg-[#FB5DA5] rounded-[8px]"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <button onClick={handleMute}>
          {isMuted ? (
            <MuteIcon />
          ) : (
            <VscUnmute
              color="#FB5DA5"
              className="w-[24px] h-[24px]  sm:w-[32px] sm:h-[32px] "
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
