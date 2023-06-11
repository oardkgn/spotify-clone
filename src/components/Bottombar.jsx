import { useMemo } from "react";
import LeftBottom from "./bottomBar/LeftBottom";
import MidBottom from "./bottomBar/MidBottom";
import RightBottom from "./bottomBar/RightBottom";
import { useAudio } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying } from "../stores/player";
import { useEffect } from "react";

function Bottombar({ isLogin }) {

  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);

  const [audio, state, controls, ref] = useAudio({
    src: isLogin ? current?.src : ""
  });

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing))
  }, [state.playing]);

  const volumeIcon = useMemo(() => {
    if (state.volume == 0 || state.muted) {
      return "volumeMuted";
    }
    if (!state.muted && state.volume < 0.3) {
      return "volumeLow";
    }
    if (!state.muted && state.volume < 0.6) {
      return "volumeNormal";
    }
    return "volumeFull";
  }, [state.volume, state.muted]);
  

  if (!isLogin) {
    return (
      <div className="h-[77px] text-white flex justify-between items-center cursor-pointer bg-gradient-to-r from-[#AF2997] to-[#509BF5]">
        <div className=" pl-4">
          <h6 className=" text-[0.8rem] tracking-widest">PREVIEW OF SPOTIFY</h6>
          <p className="font-semibold">
            Sign up to get unlimited songs and postcasts with occasional ads. No
            credit card needed.
          </p>
        </div>
        <button className="py-3 px-4 mr-2 rounded-full bg-white text-gray-900 transition-all hover:scale-110">
          Sign up free
        </button>
      </div>
    );
  } else {
    return (
      <div className="h-[75px] pb-4 pt-2 px-4 text-white flex justify-between items-center bg-black">
        <LeftBottom />
        <MidBottom audio={audio} state={state} controls={controls} />
        <RightBottom
          state={state}
          controls={controls}
          volumeIcon={volumeIcon}
        />
      </div>
    );
  }
}

export default Bottombar;
