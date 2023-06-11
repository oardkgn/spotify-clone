import React from "react";
import { Icon } from "../../assets/icons";
import { useSelector } from "react-redux";
import LinesEllipsis from "react-lines-ellipsis";
import { useState } from "react";

function LeftBottom() {
  const { current } = useSelector((state) => state.player);
  const [expandImg, setExpandImg] = useState(false);

  return (
    <div className="w-1/3 relative flex items-center">
      {expandImg ? (
        <div className="bigImg transition-all group absolute -top-[260px] w-60 rounded overflow-hidden">
          <img className="w-full" src={current.img} alt="" />
          <button
            onClick={() => {

              setExpandImg(!expandImg);
            }}
            className=" group-hover:opacity-100 opacity-0 bg-[#121212] bg-opacity-80 p-1 transition-all hover:scale-110 hover:bg-opacity-100 -rotate-90 rounded-full absolute top-2 right-2"
          >
            <Icon size={18} name="arrowLeft" />{" "}
          </button>
        </div>
      ) : (
        <div className="smallImg group transition-all relative mr-4 ">
          <img
            className="w-[58px] rounded cursor-pointer"
            src={current.img}
            alt=""
          />
          <button
            onClick={() => {
              document.querySelector(".smallImg").classList.add("w-0")
              setExpandImg(!expandImg);
            }}
            className=" group-hover:opacity-100 opacity-0 bg-[#121212] bg-opacity-80 p-1 transition-all hover:scale-110 hover:bg-opacity-100 rotate-90 rounded-full absolute top-1 left-7"
          >
            <Icon size={18} name="arrowLeft" />{" "}
          </button>
        </div>
      )}
      <div>
        <LinesEllipsis
          text={current.title}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="text-sm mb-1"
        />
        <LinesEllipsis
          text={current.artist}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="text-xs text-inactive-text-color"
        />
      </div>

      <div className="flex gap-4 ml-6 text-inactive-text-color">
        <div className=" transition-all hover:text-white cursor-pointer">
          <Icon name="heart" size={18} />
        </div>
        <div className=" transition-all hover:text-white cursor-pointer">
          <Icon name="pictureInPicture" size={18} />
        </div>
      </div>
    </div>
  );
}

export default LeftBottom;
