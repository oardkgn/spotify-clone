import React from "react";
import SectionItem from "./SectionItem";


function Section({ data, name }) {
  return (
    <div className="z-50">
      <div className="flex justify-between mb-5 pr-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <a className="hover:underline text-inactive-text-color" href="">Show all</a>
      </div>
      <div className=" max-w-[1600px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data.map((item) => {
          return (
            <SectionItem item={item} key={item.id} />
          );
        })}
      </div>
    </div>
  );
}

export default Section;
