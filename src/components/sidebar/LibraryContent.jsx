import React from "react";
import { Icon } from "../../assets/icons";
import library from "../../data/library";
import LibraryContentItem from "./LibraryContentItem";

function LibraryContent({ active }) {
  if (active) {
    return (
      <div className="mt-4">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-center">
            <img
              className=" w-12 h-12 rounded"
              src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
              alt=""
            />
            <div>
              <h3 className="font-semibold mb-[2px]">Liked Songs</h3>
              <p className="flex items-center gap-2">
                <span className=" text-brand-color">
                  <Icon name="pin" size="12" />
                </span>
                <span className=" text-sm text-inactive-text-color font-medium">
                  Playlist • 2 songs
                </span>
              </p>
            </div>
          </li>

          {library.map((item) => (
            <LibraryContentItem active={active} item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="mt-4">
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-center">
            <img
              className=" w-12 h-12 rounded"
              src="https://misc.scdn.co/liked-songs/liked-songs-640.png"
              alt=""
            />
          </li>

          {library.map((item) => (
            <LibraryContentItem active={active} item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default LibraryContent;
