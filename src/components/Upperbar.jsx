import React from "react";
import { Icon } from "../assets/icons";
import Navbar from "./upperbar/Navbar";
import { useNavigate } from "react-router-dom";
import Auth from "./upperbar/Auth";


function Upperbar({ isLogin }) {

  const navigate = useNavigate();

  return (
    <div className={ isLogin ? " bg-transparent bg-op rounded-t h-[60px] sticky z-30 top-0 px-5 flex justify-between" : "h-[60px] sticky top-0 px-5 bg-black bg-opacity-40 w-full flex justify-between" }>
      <div className="flex items-center h-full gap-2">
        <button onClick={() => navigate(-1)} className={`p-2 ${!isLogin ? "cursor-not-allowed" : "cursor-pointer"} bg-black rounded-full`}>
          <Icon name="prev" size={18} />
        </button>
        <button onClick={() => navigate(1)} className={`p-2 ${!isLogin ? "cursor-not-allowed" : "cursor-pointer"} bg-black rounded-full`}>
          <Icon name="next" size={18} />
        </button>
      </div>
      {!isLogin && (
        <div>
          <Navbar />
        </div>
      )}
      {isLogin && (
        <div className="flex gap-2 items-center">
          <button className="bg-white py-[0.4rem] px-4 text-[0.9rem] rounded-full text-black font-medium transition-all hover:scale-110">Upgrade</button>
          <button className="flex items-center gap-1 text-[0.9rem] font-semibold bg-black py-[0.4rem] px-4 rounded-full transition-all hover:scale-110"><Icon size={18} name="download" /><span className=" -mt-1">Install App</span></button>
          <Auth />
        </div>
      )}
    </div>
  );
}

export default Upperbar;
