import { useState } from "react";
import logo from "../assets/svg/logo.svg";
import Menu from "./sidebar/menu";
import PlaylistInactive from "../assets/images/playlist-inactive.png";
import PlaylistActive from "../assets/images/playlist-active.png";
import LikedInactive from "../assets/images/liked-inactive.png";
import LikedActive from "../assets/images/liked-active.png";

import { ResizableBox } from "react-resizable";

import { TbWorld } from "react-icons/tb";



function Sidebar({isLogin}) {


  const [isLibraryActive, setIsLibraryActive] = useState(true)

  const resizeHandle = (event, {node, size, handle}) => {

    if (!isLibraryActive && size.width > 130) {
      setIsLibraryActive(true)
    }else if(isLibraryActive && size.width == 280){
      setIsLibraryActive(false)
    }
  }

  return (
    <ResizableBox
    width={isLogin && !isLibraryActive ? 88 : 340}
    maxConstraints={isLogin ? [600] : [450]}
    onResize={resizeHandle}
    minConstraints={isLogin && !isLibraryActive ? [88] : [250]}
    axis="x"
    >
      <div className={isLogin ?  "sideBar bg-black overflow-hidden h-full p-2 border-r-[0.5px] border-transparent" : "sideBar bg-black h-full p-6 border-r-[0.5px] border-transparent"}>
        {!isLogin && <img className="mb-8" src={logo} alt="" />}
        <Menu isLogin={isLogin} isLibraryActive={isLibraryActive} setIsLibraryActive={setIsLibraryActive} />

        <ul className={isLogin ? "hidden" : "text-inactive-text-color mt-6 flex flex-col gap-3 text-[0.825rem] leading-4 font-[700]"}>
          <li className="" >
            <a
              className=" w-full flex gap-4 items-center transition-all ease-in duration-200 hover:text-white"
              href="#"
              onClick={() => {
                document.querySelector(".playListPop").classList.toggle("opacity-0")
                document.querySelector(".songsPop").classList.add("opacity-0")
                document.querySelector(".libraryPop").classList.add("opacity-0")
              }}
              onMouseOver={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = PlaylistActive;
                } else {
                  e.target.src = PlaylistActive;
                }
              }}
              onMouseOut={(e) =>{
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = PlaylistInactive;
                } else {
                  e.target.src = PlaylistInactive;
                }
              }
              }
            >
              <img src={PlaylistInactive} className="w-[24px] mt-1" alt="" />
              Create PLaylist
              
            </a>
            <div className="w-[230px] z-[999] relative">
            <div className=" opacity-0 playListPop absolute w-80 p-4 text-white bg-[#0D72EA] rounded -top-9 -right-64 transition-all duration-300">
                <div className="absolute bg-[#0D72EA] w-3 h-3 rotate-45 -left-[6px]"></div>
                <h3 className="text-lg font-bold mb-3">Create a Playlist</h3>
                <p className="text-[0.9rem] font-semibold">Log in to create and share playlists.</p>
                <div className="flex justify-end gap-3 mt-6">
                  <button onClick={() => document.querySelector(".playListPop").classList.add("opacity-0")} className=" text-inactive-text-color hover:text-white">Not now</button>
                  <button className="py-2 px-4 bg-white text-black rounded-full hover:scale-105">Log in</button>
                </div>
            </div>
            </div>
            
          </li>

                 {/* ----------------------------------------------------------- */}


          <li>
            <a
              className=" w-full flex gap-4 items-center transition-all ease-in duration-200 hover:text-white"
              href="#"
              onClick={() => {
                document.querySelector(".songsPop").classList.toggle("opacity-0")
                document.querySelector(".playListPop").classList.add("opacity-0")
                document.querySelector(".libraryPop").classList.add("opacity-0")
              }}
              onMouseOver={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = LikedActive;
                } else {
                  e.target.src = LikedActive;
                }
              }}
              onMouseOut={(e) =>{
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = LikedInactive;
                } else {
                  e.target.src = LikedInactive;
                }
              }
              }
            >
              <img src={LikedInactive} className="w-[24px] mt-1" alt="" /> Liked
              Songs
            </a>
            <div className="w-[230px] z-[999] relative">
            <div className=" opacity-0 songsPop absolute w-80 p-4 text-white bg-[#0D72EA] rounded -top-9 -right-64 transition-all duration-300">
                <div className="absolute bg-[#0D72EA] w-3 h-3 rotate-45 -left-[6px]"></div>
                <h3 className="text-lg font-bold mb-3">Enjoy your Liked Songs</h3>
                <p className="text-[0.9rem] font-semibold">Log in to see all the songs you've liked in one easy playlist.</p>
                <div className="flex justify-end gap-3 mt-6">
                  <button onClick={() => document.querySelector(".songsPop").classList.add("opacity-0")} className=" text-inactive-text-color hover:text-white">Not now</button>
                  <button className="py-2 px-4 bg-white text-black rounded-full hover:scale-105">Log in</button>
                </div>
            </div>
            </div>
          </li>
        </ul>

        <div className={isLogin ? "hidden" : "text-inactive-text-color flex items-end h-64 text-[0.68rem] font-normal"}>
          <div className="flex flex-wrap gap-4">
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
        </div>

        <button className={isLogin ? "hidden" : " border-[0.1px] border-gray-500 mt-8 flex items-center gap-2 py-[0.3rem] px-[0.9rem] rounded-full text-sm font-semibold transition-all hover:border-white hover:scale-105"}>
          <TbWorld className=" text-[20px] -mx-1" />
          <span className=" -mt-[2px]">English</span>
        </button>
      </div>
    </ResizableBox>
  );
}

export default Sidebar;
