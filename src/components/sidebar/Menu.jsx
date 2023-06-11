import React from "react";
import HomeInactiveLogo from "../../assets/images/home-inactive.png";
import HomeInactiveHoverLogo from "../../assets/images/home-inactive-hover.png";
import SearchInactiveLogo from "../../assets/images/search-inactive.png";
import SearchInactiveHoverLogo from "../../assets/images/search-inactive-hover.png";
import LibraryInactiveLogo from "../../assets/images/library-inactive.png";
import LibraryActiveLogo from "../../assets/images/library-active.png";
import LibraryInactiveHoverLogo from "../../assets/images/library-inactive-hover.png";
import { NavLink } from "react-router-dom";
import { Icon } from "../../assets/icons";
import { FiSearch } from "react-icons/fi";
import { GoTriangleDown } from "react-icons/go";
import { BsCheck2 } from "react-icons/bs";
import { useState } from "react";
import LibraryContent from "./LibraryContent";

function menu({ isLogin, isLibraryActive, setIsLibraryActive }) {
  const [sortBy, setSortBy] = useState("Recents");

  function toggleDropDown() {
    document.querySelector(".dropDown").classList.toggle("h-0");
    document.querySelector(".dropDown").classList.toggle("overflow-hidden");
    document.querySelector(".dropDownArrow").classList.toggle("rotate-180");
  }

  return (
    <div className="h-[calc(100%-162px)] pb-2">
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
              {isLibraryActive ? "Home" : ""}
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
              {isLibraryActive ? "Search" : ""}
            </NavLink>
          </li>
        </div>
        <div className="pl-6 pr-3 shadow-lg shadow-black py-2 bg-[#121212] rounded-t mt-2">
          <li
            className={
              isLogin
                ? "relative w-full navlink-library h-8 flex items-center overflow-visible text-inactive-text-color text-[1rem] font-bold"
                : " h-8 transition-all ease-linear  duration-150 navlink-library hover:text-white"
            }
          >
            <a
              href="#"
              className="w-[8000px] flex  items-center gap-4 hover:text-white transition-all ease-linear  duration-150"
              onClick={() => {
                setIsLibraryActive(!isLibraryActive);

                document
                  .querySelector(".navlink-library")
                  .classList.toggle("inactive");
                if (!isLogin) {
                  document
                    .querySelector(".libraryPop")
                    .classList.toggle("opacity-0");
                  document
                    .querySelector(".libraryPop")
                    .classList.toggle("hidden");
                  document
                    .querySelector(".songsPop")
                    .classList.add("opacity-0");
                  document
                    .querySelector(".playListPop")
                    .classList.add("opacity-0");
                }
              }}
            >
              <img
                src={isLogin ? LibraryActiveLogo : LibraryInactiveLogo}
                className=" w-[22px] mt-[2px]"
                alt="logo"
              />
              {isLibraryActive ? "Your Library" : <></>}
            </a>

            {isLogin && isLibraryActive ? (
              <>
                <div className="flex text-inactive-text-color gap-2 absolute right-0">
                  <button className=" rounded-full  transition-all hover:bg-opacity-80 hover:text-white p-2 bg-[#505050] bg-opacity-0">
                    <Icon name="plus" size={16} />
                  </button>
                  <button onClick={()=>{}} className=" rounded-full transition-all hover:bg-opacity-80 hover:text-white p-2 bg-[#505050] bg-opacity-0">
                    <Icon name="arrowRight" size={16} />
                  </button>
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="w-[230px] relative">
              <div className="hidden opacity-0 z-20 libraryPop absolute w-80 p-4 text-white bg-[#0D72EA] rounded -top-9 -right-64 transition-all duration-300">
                <div className="absolute bg-[#0D72EA] w-3 h-3 rotate-45 -left-[6px]"></div>
                <h3 className="text-lg font-bold mb-3">Enjoy Your Library</h3>
                <p className="text-[0.9rem] font-semibold">
                  Log in to see saved songs,podcasts,artists <br /> and
                  playlists in Your Library.{" "}
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
        </div>
      </ul>
      {isLogin && isLibraryActive ? (
        <div className="h-full bg-[#121212] pl-4 py-3 rounded-b">
          <div className="flex gap-2 pb-3 text-[0.82rem] font-[600]">
            <button className="py-[0.4rem] px-3 rounded-full bg-[#2A2A2A]">
              Playlists
            </button>
            <button className="py-[0.4rem] px-3 rounded-full bg-[#2A2A2A]">
              Albums
            </button>
          </div>
            <div className=" flex items-center  pr-2 justify-between">
              <button>
                <FiSearch className="p-2 text-[34px] text-inactive-text-color transition-all hover:text-white hover:bg-[#2A2A2A] rounded-full" />
              </button>
              <div className="relative text-white">
                <button
                  onClick={() => toggleDropDown()}
                  className="flex items-center text-inactive-text-color gap-2 text-[0.84rem] transition-all hover:text-white font-[700]"
                >
                  {sortBy}
                  <GoTriangleDown className=" transition-all dropDownArrow" />
                </button>
                <div className="absolute top-8 dropDown w-40 z-[9999] bg-[#2A2A2A] rounded transition-all h-0 overflow-hidden">
                  <ul className="flex flex-col font-[600] z-[9999] px-1 pt-4 pb-1 text-[0.86rem] ">
                    <li className="text-[0.72rem] text-inactive-text-color px-4 font-bold mb-1">
                      Sort by
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy("Recents");
                          toggleDropDown();
                        }}
                        className={
                          "hover:bg-[#424242] w-full pl-4 pr-1 py-3 rounded text-left flex justify-between items-center" +
                          (sortBy == "Recents" && " text-brand-color")
                        }
                      >
                        Recents
                        {sortBy == "Recents" && (
                          <BsCheck2 className="text-[24px] font-semibold" />
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy("Recently Added");
                          toggleDropDown();
                        }}
                        className={
                          "hover:bg-[#424242] w-full pl-4 pr-1 py-3 rounded text-left flex justify-between items-center" +
                          (sortBy == "Recently Added" && " text-brand-color")
                        }
                      >
                        Recently Added{" "}
                        {sortBy == "Recently Added" && (
                          <BsCheck2 className="text-[24px] font-semibold" />
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy("Alphabetical");
                          toggleDropDown();
                        }}
                        className={
                          "hover:bg-[#424242] w-full pl-4 pr-1 py-3 rounded text-left flex justify-between items-center" +
                          (sortBy == "Alphabetical" && " text-brand-color")
                        }
                      >
                        Alphabetical{" "}
                        {sortBy == "Alphabetical" && (
                          <BsCheck2 className="text-[24px] font-semibold" />
                        )}
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setSortBy("Creator");
                          toggleDropDown();
                        }}
                        className={
                          "hover:bg-[#424242] w-full pl-4 pr-1 py-3 rounded text-left flex justify-between items-center" +
                          (sortBy == "Creator" && " text-brand-color")
                        }
                      >
                        Creator{" "}
                        {sortBy == "Creator" && (
                          <BsCheck2 className="text-[24px] font-semibold" />
                        )}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          <div className=" h-[calc(100%-36px)] z-40 overflow-y-auto overflow-x-hidden">
            <div className=" library bg-[#121212] rounded-b">
              <LibraryContent active={isLibraryActive} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isLogin && !isLibraryActive ? (
        <div className="library overflow-y-auto flex justify-center h-full bg-[#121212] rounded-b">
          <LibraryContent active={isLibraryActive} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default menu;
