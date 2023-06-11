import React from "react";
import { Icon } from "../../assets/icons";

function LibraryContentItem({ item, active }) {
  if (active) {
    return (
      <li className="flex gap-3 items-center">
        <img className=" w-12 h-12 rounded" src={item.cover} alt="cover" />
        <div>
          <h3 className="font-semibold mb-[2px]">{item.title}</h3>
          <p className="flex items-center gap-2">
            <span className=" text-sm text-inactive-text-color font-medium">
              {item.desc}
            </span>
          </p>
        </div>
      </li>
    );
  } else {
    return (
      <li className="flex gap-3 items-center">
        <img className=" w-12 h-12 rounded" src={item.cover} alt="cover" />
      </li>
    );
  }
}

export default LibraryContentItem;
