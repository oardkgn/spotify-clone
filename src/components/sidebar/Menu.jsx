import React from "react";
import { Icon } from "../../assets/icons";
import HomeActiveLogo from "../../assets/images/home-active.png";
import SearchInactiveLogo from "../../assets/images/search-inactive.png";
import SearchInactiveHoverLogo from "../../assets/images/search-inactive-hover.png";
import LibraryInactiveLogo from "../../assets/images/library-inactive.png";
import PlaylistInactive from "../../assets/images/playlist-inactive.png";
import LikedInactive from "../../assets/images/liked-inactive.png";
import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function menu() {
  return (
    <div>
      <ul className=" text-inactive-text-color text-[13px] leading-4 font-bold flex flex-col gap-2 mt-9">
        <li className=" h-8 transition-all ease-linear duration-150 hover:text-white">
          <NavLink to="/"
            className={({ isActive }) => "w-full flex items-center gap-4 hover:text-white" + (isActive ? " text-white" : "text-inactive-text-color")}
          >
            <img
              src={HomeActiveLogo}
              className=" w-[22px] mt-[2px]"
              alt="logo"
            />{" "}
            Home
          </NavLink>
        </li>
        <li className=" h-8 transition-all ease-linear  duration-150 hover:text-white">
          <NavLink to="/search"
            className={({ isActive }) => "w-full flex items-center gap-4 hover:text-white" + (isActive ? " text-white" : "text-inactive-text-color")}
            onMouseOver={e => e.target.childNodes[0].src = SearchInactiveHoverLogo}
            onMouseOut={e => e.target.childNodes[0].src = SearchInactiveLogo}
          >
            <img
              src={SearchInactiveLogo}
              className=" w-[22px] mt-[2px]"
              alt="logo"
            />
            Search
          </NavLink>
        </li>
        <li className=" h-8 transition-all ease-linear  duration-150 hover:text-white">
          <NavLink to="/library"
            className={({ isActive }) => "w-full flex items-center gap-4 hover:text-white" + (isActive ? " text-white" : "text-inactive-text-color")}
            href=""
          >
            <img
              src={LibraryInactiveLogo}
              className=" w-[22px] mt-[2px]"
              alt="logo"
            />
            Your Library
          </NavLink>
        </li>
      </ul>

      <ul className="text-inactive-text-color mt-6 flex flex-col gap-3 text-[13px] leading-4 font-semibold">
        <li>
          <a
            className=" w-full flex gap-4 items-center transition-all ease-in duration-200 hover:text-white"
            href=""
          >
            <img src={PlaylistInactive} className="w-[24px] mt-1" alt="" />{" "}
            Create PLaylist
          </a>
        </li>
        <li>
          <a
            className=" w-full flex gap-4 items-center transition-all ease-in duration-200 hover:text-white"
            href=""
          >
            <img src={LikedInactive} className="w-[24px] mt-1" alt="" /> Liked
            Songs
          </a>
        </li>
      </ul>

      <div className="text-inactive-text-color mt-[8.2rem] text-[0.68rem] font-normal flex flex-wrap gap-4 ">
        <a className="  " href="">
          Legal
        </a>
        <a className=" break-keep" href="">
          Privacy Center
        </a>
        <a className=" break-keep" href="">
          Privacy Policy
        </a>
        <a className="  " href="">
          Cookies
        </a>
        <a className="  " href="">
          About Ads
        </a>
        <a className=" break-keep" href="">
          Accessibility
        </a>
        <a className="  " href="">
          Cookies
        </a>
      </div>

      <button className=" border-[0.1px] border-gray-500 mt-10 flex items-center gap-2 py-[0.3rem] px-[0.9rem] rounded-full text-xs font-semibold transition-all hover:border-white hover:scale-105">
        <TbWorld className=" text-[20px] -mx-1" />
        <span className=" -mt-[2px]">English</span>
      </button>
    </div>
  );
}

export default menu;
