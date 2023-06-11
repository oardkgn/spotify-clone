import React, { useState } from "react";
import { Icon } from "../../assets/icons";

import CustomTrack from "./CustomTrack";
import { secondsToTime } from "../../utils";

function MidBottom({ audio , state , controls}) {
  

  return (
    <div className=" flex flex-col w-[40%] max-w-3xl">
      <div className=" flex gap-5 items-center justify-center">
        <div className=" group relative">
        <Icon name="shuffle" size={20} />
        <div className="bg-[#434343] group-hover:opacity-100 transition-all duration-300 text-white p-1 rounded whitespace-nowrap text-sm font-medium absolute opacity-0 -top-8 -left-10 z-50">Enable shuffle</div>
        </div>
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
