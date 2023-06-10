import React from "react";
import LinesEllipsis from "react-lines-ellipsis";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../assets/icons";

function Section({ data, name }) {
  return (
    <div className="z-50">
      <div className="flex justify-between mb-5 pr-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <a className="hover:underline text-inactive-text-color" href="">Show all</a>
      </div>
      <div className="grid gap-6 grid-cols-2 md:grid-col-3 lg:grid-cols-5">
        {data.map((item) => {
          return (
            <NavLink key={item.id}>
            <div
              
              className=" group cursor-pointer p-4 transition-all duration-300 hover:bg-[#272727] bg-[#181818] flex flex-col items-center rounded"
            >
              <div className="relative">
              <img src={item.img} className=" shadow-md shadow-black w-44 rounded" alt="" />
              <div className=' opacity-0 group-hover:opacity-100 group-hover:right-2 group-hover:bottom-2 transition-all hover:scale-105 duration-300 absolute -right-2 -bottom-2 bg-brand-color p-[0.8rem] shadow-xl shadow-black rounded-full'><Icon size={20} name="PlayBlack" /></div>
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
          );
        })}
      </div>
    </div>
  );
}

export default Section;
