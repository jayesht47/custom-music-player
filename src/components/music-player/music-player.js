import PlayBackControls from "../playback-controls/playback-controls";
import ProgressBar from "../progress-bar/progress-bar";
import { ReactComponent as LikeOnIcon } from "../../icons/like_on.svg";
import { ReactComponent as LikeOffIcon } from "../../icons/like_off.svg";
import { ReactComponent as VolDownIcon } from "../../icons/volume_down.svg";
import { ReactComponent as PlayListAddIcon } from "../../icons/playlist_add.svg";
import { useState } from "react";

const MusicPlayer = () => {
  const [liked, setLiked] = useState(false);

  const likeClickHandler = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="flex flex-col absolute bottom-0 w-full">
        <div className="w-full">
          <ProgressBar />
        </div>
        <div className="h-16 flex flex-row justify-between">
          <div className="aa-and-title flex">
            <div className="album-art ">
              <img
                src="https://images.pexels.com/photos/1713953/pexels-photo-1713953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="album art"
                className="h-16"
              />
            </div>
            <div className="flex flex-col p-2">
              <div className="font-semibold">
                Episode 1 : How to feel yourself
              </div>
              <div className="text-left font-thin">Love kit</div>
            </div>
          </div>
          <PlayBackControls />
          <div className="right-playback-controls flex self-center fill-slate-400 px-2">
            {!liked && (
              <LikeOffIcon
                onClick={likeClickHandler}
                className="self-center cursor-pointer"
              />
            )}
            {liked && (
              <LikeOnIcon
                onClick={likeClickHandler}
                className="fill-orange-400 self-center cursor-pointer "
              />
            )}
            <PlayListAddIcon className="self-center cursor-pointer" />
            <VolDownIcon className="self-center cursor-pointer" />
            <div className="w-20 self-center">
              <ProgressBar />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <audio src="C:\Users\2268770\Downloads\sample-audio.mp3"></audio>
      </div>
    </>
  );
};

export default MusicPlayer;
