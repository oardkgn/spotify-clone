import React, { useState } from "react";
import { Icon } from "../../assets/icons";
import { useAudio } from "react-use";
import CustomTrack from "./CustomTrack";
import { secondsToTime } from "../../utils";

function MidBottom() {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });

  return (
    <div className=" flex flex-col w-[40%] max-w-3xl">
      <div className=" flex gap-5 items-center justify-center">
        <Icon name="shuffle" size={20} />
        <Icon name="playerPrev" size={20} />
        <button
          onClick={controls[state.playing ? "pause" : "play"]}
          className=" transition-all hover:scale-105 bg-white p-2 rounded-full text-black"
        >
          <Icon name={state.playing ? "pause" : "play"} size={18} />
        </button>
        <Icon name="playerNext" size={20} />
        <Icon name="repeat" size={20} />
      </div>
      <div className="flex items-center gap-[0.31rem]">
        {audio}
        <span className=" text-[0.72rem] text-inactive-text-color">{secondsToTime(state?.time)}</span>
        <CustomTrack
          value={state?.time}
          max={state?.duration || 1}
          min={0}
          step={0.1}
          onChange={value => controls.seek(value)}
        />
        <span className=" text-[0.72rem] text-inactive-text-color">{secondsToTime(state?.duration)}</span>
      </div>
    </div>
  );
}

export default MidBottom;
