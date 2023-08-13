import { ReactComponent as PlayIcon } from "../../icons/play_fill.svg";
import { ReactComponent as PauseIcon } from "../../icons/pause.svg";
import { ReactComponent as RepeatOffIcon } from "../../icons/repeat_one_off.svg";
import { ReactComponent as PrevIcon } from "../../icons/skip_previous.svg";
import { ReactComponent as NextIcon } from "../../icons/skip_next.svg";
import { ReactComponent as ShuffleOffIcon } from "../../icons/shuffle_off.svg";
import { ReactComponent as ShuffleOnIcon } from "../../icons/shuffle_on.svg";
import { ReactComponent as RepeatOnIcon } from "../../icons/repeat_one_on.svg";
import { useContext, useState } from "react";
import { PlayerContext } from "../../store/context";

const PlayBackControls = () => {
  const [isRepeat, setIsRepeat] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const player = useContext(PlayerContext);

  const repeatClickHandler = () => {
    setIsRepeat(!isRepeat);
  };

  const shuffleClickHandler = () => {
    setIsShuffle(!isShuffle);
  };

  const playPauseClickHandler = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? player.pause() : player.resume();
  };

  return (
    <div className="playback-controls flex self-center fill-slate-400">
      {!isShuffle && (
        <ShuffleOffIcon
          onClick={shuffleClickHandler}
          className="self-center cursor-pointer mx-1"
        />
      )}
      {isShuffle && (
        <ShuffleOnIcon
          onClick={shuffleClickHandler}
          className="self-center cursor-pointer mx-1"
        />
      )}
      <PrevIcon className="self-center cursor-pointer mx-1" />
      {!isPlaying && (
        <PlayIcon
          onClick={playPauseClickHandler}
          className="fill-orange-400 cursor-pointer mx-1"
        />
      )}
      {isPlaying && (
        <PauseIcon
          onClick={playPauseClickHandler}
          className="fill-orange-400 cursor-pointer mx-1"
        />
      )}
      <NextIcon className="self-center cursor-pointer mx-1" />
      {!isRepeat && (
        <RepeatOffIcon
          onClick={repeatClickHandler}
          className="self-center cursor-pointer mx-1"
        />
      )}
      {isRepeat && (
        <RepeatOnIcon
          onClick={repeatClickHandler}
          className="self-center cursor-pointer mx-1"
        />
      )}
    </div>
  );
};

export default PlayBackControls;
