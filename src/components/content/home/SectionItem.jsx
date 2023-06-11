import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "../../../stores/player";

function SectionItem({ item }) {
  const {current, playing, controls} = useSelector( state => state.player);
  const dispatch = useDispatch();

  const updateCurrent = () => {
    if (current?.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  const isCurrentItem = current?.id === item.id && playing;

  return (
    <div>
      <NavLink key={item.id}>
        <div className=" group cursor-pointer p-4 transition-all duration-300 hover:bg-[#272727] bg-[#181818] flex flex-col items-center rounded">
          <div className="relative">
            <img
              src={item.img}
              className=" shadow-md shadow-black w-44 rounded"
              alt=""
            />
            <div
              onClick={updateCurrent}
              className={`${!isCurrentItem ? "opacity-0" : "opacity-100"} group-hover:opacity-100 group-hover:right-2 group-hover:bottom-2 transition-all hover:scale-105 duration-300 absolute -right-2 -bottom-2 bg-brand-color p-[0.8rem] shadow-xl shadow-black rounded-full`}
            >
              <Icon size={20} name={isCurrentItem ? "pause" : "play"} />
            </div>
          </div>
          <h5 className=" self-start mt-3 text-white font-bold">
            {item.title}
          </h5>
          <LinesEllipsis
            text={item.desc}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="text-sm self-start text-inactive-text-color"
          />
        </div>
      </NavLink>
    </div>
  );
}

export default SectionItem;
