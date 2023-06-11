import React from "react";
import categories from "../../data/categories";
import SearchItem from "./search/SearchItem";
import { Icon } from "../../assets/icons";

function Search() {
  return (
    <div className="bg-[#121212] p-6">
      <h1 className="text-[1.4rem] font-bold text-white tracking-tight">
        Browse all
      </h1>
      <div className=" grid grid-cols-5 gap-6 mt-5 max-w-7xl">
        {categories.map((item) => (
          <SearchItem item={item} key={item.id} />
        ))}
      </div>
      <footer className="mt-[100px] px-2 pb-[80px]">
        <div className="flex justify-between">
          <div className="flex gap-32">
            <div>
              <h1 className=" font-bold mb-2">Company</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a  href="" className=" transition-all hover:underline hover:text-white"> About </a>
                </li>
                <li>
                  <a  href="" className=" transition-all hover:underline hover:text-white"> Jobs </a>
                </li>
                <li>
                  <a   href="" className=" transition-all hover:underline hover:text-white"> For the Record </a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Communities</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">For Artist</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Developers</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Advertising</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Investors</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Vendors</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Spotify for Work</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className=" font-bold mb-2">Useful links</h1>
              <ul className=" flex flex-col gap-2 text-inactive-text-color font-medium">
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Support</a>
                </li>
                <li>
                  <a className=" transition-all hover:underline hover:text-white" href="">Free Mobile App</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-4">
            <button className=" hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Icon name="instagram" size="18" />
              </div>
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Icon name="instagramIn" size={18} />
              </div>
            </button>
            <button className="hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full flex justify-center items-center">
              <Icon name="twitter" size="18" />
            </button>
            <button className="hover:bg-[#494949] w-10 h-10 bg-[#292929] rounded-full flex justify-center items-center">
              <Icon name="facebook" size="18" />
            </button>
          </div>
        </div>
        <div className="w-full mt-10 mb-6 h-7 border-t border-inactive-text-color border-opacity-20" > </div>
        <div className="flex justify-between items-center">
          <div className="flex">
            <ul className="flex gap-4 text-sm font-medium text-inactive-text-color">
              <li><a href="" className="hover:text-white">Legal</a></li>
              <li><a href="" className="hover:text-white">Privacy Center</a></li>
              <li><a href="" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="" className="hover:text-white">Cookies</a></li>
              <li><a href="" className="hover:text-white">About Ads</a></li>
              <li><a href="" className="hover:text-white">Accesibility</a></li>
            </ul>
          </div>
          <div className=" text-inactive-text-color">
          © 2023 Spotify AB
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Search;
