import React from "react";
import { Icon } from "../../assets/icons";
import CustomTrack from "./CustomTrack";

function RightBottom({ state, controls, volumeIcon }) {
  return (
    <div className="w-1/3 flex text-inactive-text-color justify-end items-center gap-[0.85rem]">
      <div className=" transition-all hover:text-white cursor-pointer">
        <Icon name="lyrics" size={18} />
      </div>
      <div className=" transition-all hover:text-white cursor-pointer">
        <Icon name="queue" size={20} />
      </div>
      <div className=" transition-all hover:text-white cursor-pointer">
        <Icon name="device" size={20} />
      </div>
      <div
        onClick={controls[state.muted ? "unmute" : "mute"]}
        className=" transition-all hover:text-white cursor-pointer"
      >
        <Icon name={volumeIcon} size={20} />
      </div>
      <div className=" w-1/5">
        <CustomTrack
          value={state.muted ? 0 : state?.volume}
          step={0.01}
          min={0}
          max={1}
          onChange={(value) => controls.volume(value)}
        />
      </div>
    </div>
  );
}

export default RightBottom;
