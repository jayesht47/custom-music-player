import PlayBackControls from "../playback-controls/playback-controls";
import ProgressBar from "../progress-bar/progress-bar";
import { ReactComponent as LikeOnIcon } from "../../icons/like_on.svg";
import { ReactComponent as LikeOffIcon } from "../../icons/like_off.svg";
import { ReactComponent as VolDownIcon } from "../../icons/volume_down.svg";
import { ReactComponent as PlayListAddIcon } from "../../icons/playlist_add.svg";
import { useState } from "react";
import { PlayerContext } from "../../store/context";

const MusicPlayer = () => {
  const [liked, setLiked] = useState(false);
  const [spotifyPlayer, setSpotifyPlayer] = useState(null);
  const [currentTrackInfo, setCurrentTrackInfo] = useState({});

  const likeClickHandler = () => {
    setLiked(!liked);
  };

  const initCurrentInfo = (player) => {
    if (player) {
      player.getCurrentState().then((curTrack) => {
        if (curTrack) {
          setCurrentTrackInfo(curTrack);
          var current_track = curTrack.track_window.current_track;
          var next_track = curTrack.track_window.next_tracks[0];
          console.log("Currently Playing", current_track);
          console.log("Playing Next", next_track);
        }
      });
    }
  };

  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = `BQAjTU-fuTti62NO7P9xT-BHKowxApt1oHHeGU8_ojyVlgMI3POzKOF7DMF2O4UN-mqF8yjGL9060Cn-Tk9SUslvimJqDIbVIs6QeCGk_RChZY4djlFlxXTCQw_-IL7h1PuPEHBTWUTQSEX1RNJA3R4C2E7MpX8dV-wZh7OcmmN11QC90xohxUsVXVjy5DrohzWB-JnpBCzI7K_6EBM-NriQ7QCfsfsx`;
    // eslint-disable-next-line no-undef
    const player = new Spotify.Player({
      name: "Web Playback SDK Quick Start Player",
      getOAuthToken: (cb) => {
        cb(token);
      },
      volume: 0.5,
    });
    player.addListener("ready", ({ device_id }) => {
      console.log("Ready with Device ID", device_id);
      setSpotifyPlayer(player);
      player.setName("Jayesh Custom Web Player").then(() => {
        console.log("name updated");
      });
      initCurrentInfo(player);
    });

    // Not Ready
    player.addListener("not_ready", ({ device_id }) => {
      console.log("Device ID has gone offline", device_id);
    });

    player.addListener("initialization_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("authentication_error", ({ message }) => {
      console.error(message);
    });

    player.addListener("account_error", ({ message }) => {
      console.error(message);
    });

    player.connect();
  };

  return (
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
        <PlayerContext.Provider value={spotifyPlayer}>
          <PlayBackControls />
        </PlayerContext.Provider>
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
  );
};

export default MusicPlayer;
