import React from "react";
import { Icon } from "../assets/icons";
import Navbar from "./upperbar/Navbar";
import { useNavigate } from "react-router-dom";
import Auth from "./upperbar/Auth";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState,useEffect } from "react";

function Upperbar({ isLogin , showUpper }) {


  const navigate = useNavigate();
  const location = useLocation();


  

  return (
    <div
      className={
        isLogin
          ? "upperBar transition-all rounded-t h-[60px] sticky z-[100] top-0 px-5 flex justify-between  " + `${showUpper && "bg-[#121212]"}`
          : "h-[60px] sticky top-0 px-5 bg-black bg-opacity-40 w-full flex justify-between"
      }
    >
      <div className="flex items-center h-full gap-2">
        <button
          onClick={() => navigate(-1)}
          className={`p-2 ${
            !isLogin ? "cursor-not-allowed" : "cursor-pointer"
          } bg-black rounded-full`}
        >
          <Icon name="prev" size={18} />
        </button>
        <button
          onClick={() => navigate(1)}
          className={`p-2 ${
            !isLogin ? "cursor-not-allowed" : "cursor-pointer"
          } bg-black rounded-full`}
        >
          <Icon name="next" size={18} />
        </button>
      </div>
      {location.pathname == "/search" && <div className="w-full relative flex items-center pl-2"><FiSearch className="absolute left-5 text-[18px] text-[#cdcdcd]"/><input placeholder="What do you want to listen to?" className="bg-[#262626] w-[360px] text-[0.82rem] text-white font-semibold min-[300px] pl-9 pr-4 py-3 rounded-full" type="text" /></div>}
      {!isLogin && (
        <div>
          <Navbar />
        </div>
      )}
      {isLogin && (
        <div className="flex flex-shrink-0 gap-2 items-center w-[262px]">
          <button className="bg-white py-[0.4rem] px-4 text-[0.9rem] rounded-full text-black font-medium transition-all hover:scale-110">
            Upgrade
          </button>
          <button className="flex items-center gap-1 text-[0.9rem] font-semibold bg-black py-[0.4rem] px-4 rounded-full transition-all hover:scale-110">
            <Icon size={18} name="download" />
            <span className=" break-keep -mt-1">Install App</span>
          </button>
          <Auth />
        </div>
      )}
    </div>
  );
}

export default Upperbar;
