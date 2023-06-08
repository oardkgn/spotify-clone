import React from "react";
import HomeInactiveLogo from "../../assets/images/home-inactive.png";
import HomeInactiveHoverLogo from "../../assets/images/home-inactive-hover.png";
import SearchInactiveLogo from "../../assets/images/search-inactive.png";
import SearchInactiveHoverLogo from "../../assets/images/search-inactive-hover.png";
import LibraryInactiveLogo from "../../assets/images/library-inactive.png";
import LibraryInactiveHoverLogo from "../../assets/images/library-inactive-hover.png";
import { NavLink } from "react-router-dom";
import { Icon } from "../../assets/icons";
import { BiRightArrowAlt } from "react-icons/bi";

function menu({ isLogin }) {
  return (
    <div className="">
      <ul
        className={
          " text-inactive-text-color text-[0.8rem] leading-4 font-bold flex flex-col gap-2" +
          isLogin
            ? "mt-0"
            : "mt-9"
        }
      >
        <div
          className={
            isLogin
              ? "bg-[#121212] text-inactive-text-color leading-4 font-bold py-4 px-6 flex flex-col gap-4 rounded"
              : ""
          }
        >
          <li className=" h-8 transition-all ease-linear duration-150 hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) =>
                "navlink-home w-full flex items-center gap-5 hover:text-white" +
                (isActive ? " text-white active" : "text-inactive-text-color")
              }
              onMouseOver={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = HomeInactiveHoverLogo;
                } else {
                  e.target.src = HomeInactiveHoverLogo;
                }
              }}
              onMouseOut={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = HomeInactiveLogo;
                } else {
                  e.target.src = HomeInactiveLogo;
                }
              }}
            >
              <img
                src={HomeInactiveLogo}
                className=" w-[22px] mt-[2px]"
                alt="logo"
              />
              Home
            </NavLink>
          </li>
          <li className=" h-8 transition-all ease-linear  duration-150 hover:text-white">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                "navlink-search w-full flex items-center gap-5 hover:text-white" +
                (isActive ? " text-white active" : "text-inactive-text-color")
              }
              onMouseOver={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = SearchInactiveHoverLogo;
                } else {
                  e.target.src = SearchInactiveHoverLogo;
                }
              }}
              onMouseOut={(e) => {
                if (e.target.tagName == "A") {
                  e.target.childNodes[0].src = SearchInactiveLogo;
                } else {
                  e.target.src = SearchInactiveLogo;
                }
              }}
            >
              <img
                src={SearchInactiveLogo}
                className=" w-[22px] mt-[2px]"
                alt="logo"
              />
              Search
            </NavLink>
          </li>
        </div>

        <li
          className={
            isLogin
              ? "w-full flex items-center justify-between overflow-visible text-inactive-text-color text-[1rem] leading-5 font-bold bg-[#121212] rounded mt-2 p-4"
              : " h-8  hover:text-white"
          }
        >
          <a
            href="#"
            className=" bg-red-200 flex items-center gap-4 hover:text-white transition-all ease-linear  duration-150"
            onClick={() => {
              document
                .querySelector(".libraryPop")
                .classList.toggle("opacity-0");
              document.querySelector(".libraryPop").classList.toggle("hidden");
              document.querySelector(".songsPop").classList.add("opacity-0");
              document.querySelector(".playListPop").classList.add("opacity-0");
            }}
            onMouseOver={(e) => {
              if (e.target.tagName == "A") {
                e.target.childNodes[0].src = LibraryInactiveHoverLogo;
              } else {
                e.target.src = LibraryInactiveHoverLogo;
              }
            }}
            onMouseOut={(e) => {
              if (e.target.tagName == "A") {
                e.target.childNodes[0].src = LibraryInactiveLogo;
              } else {
                e.target.src = LibraryInactiveLogo;
              }
            }}
          >
            <img
              src={LibraryInactiveLogo}
              className=" w-[22px] mt-[2px]"
              alt="logo"
            />
            Your Library
            
          </a>

          {isLogin && (
              <div className="flex gap-2 bg-red-50">
                <button>
                  <Icon name="plus" size={18} />
                </button>{" "}
                <button>
                  <BiRightArrowAlt className=" text-[24px]" />
                </button>
              </div>
            )}

          <div className="w-[230px] relative">
            <div className="hidden opacity-0 z-20 libraryPop absolute w-80 p-4 text-white bg-[#0D72EA] rounded -top-9 -right-64 transition-all duration-300">
              <div className="absolute bg-[#0D72EA] w-3 h-3 rotate-45 -left-[6px]"></div>
              <h3 className="text-lg font-bold mb-3">Enjoy Your Library</h3>
              <p className="text-[0.9rem] font-semibold">
                Log in to see saved songs,podcasts,artists <br /> and playlists
                in Your Library.{" "}
              </p>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  onClick={() => {
                    document
                      .querySelector(".libraryPop")
                      .classList.add("opacity-0");
                    document
                      .querySelector(".libraryPop")
                      .classList.add("hidden");
                  }}
                  className=" text-inactive-text-color hover:text-white"
                >
                  Not now
                </button>
                <button className="py-2 px-4 bg-white text-black rounded-full hover:scale-105">
                  Log in
                </button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default menu;
