import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent, setPlaying } from "../../../stores/player";

function FirstsecItem({ item }) {
  function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height =
      imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */ alert("x");
      return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }

  function valueToHex(c) {
    var hex = c.toString(16);

    return hex;
  }

  function rgbToHex(r, g, b) {
    return valueToHex(r) + valueToHex(g) + valueToHex(b);
  }

  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

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
    <NavLink key={item.id}>
      <div
        onMouseOver={() => {
          let rgb = getAverageRGB(document.getElementById(`img${item.id}`));
          document.querySelector(
            "#gradient"
          ).classList = `transition-all duration-500 ease-in w-full h-96 z-10 bg-gradient-to-b from-transparent to-[#121212] absolute -top-[60px]`;
          document.querySelector(
            "#gradient"
          ).style.backgroundColor = `#${rgbToHex(rgb.r, rgb.g, rgb.b)}`;
        }}
        onMouseOut={(e) => {
          document.querySelector("#gradient").classList =
            "transition-all duration-500 ease-in w-full h-96 z-10 bg-gradient-to-b from-transparent to-[#121212] absolute -top-[60px]";
          document.querySelector("#gradient").style.backgroundColor =
            "transparent";
        }}
        className=" group relative cursor-pointer transition-all duration-300 hover:bg-[#505050] overflow-hidden flex font-bold items-center gap-4 bg-[#272727] rounded"
      >
        <img
          id={`img${item.id}`}
          className=" shadow-xl shadow-black"
          src={item.img}
          alt=""
        />
        {item.title}
        <div
          onClick={updateCurrent}
          className={`${
            !isCurrentItem ? "opacity-0" : "opacity-100"
          } group-hover:opacity-100 transition-all hover:scale-105 duration-300 absolute right-2 top-1/2 -translate-y-1/2 bg-brand-color p-[0.8rem] shadow-xl shadow-black rounded-full`}
        >
          <Icon size={20} name={isCurrentItem ? "pause" : "play"} />
        </div>
      </div>
    </NavLink>
  );
}

export default FirstsecItem;
