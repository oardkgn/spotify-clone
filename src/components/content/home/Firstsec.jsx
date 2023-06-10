import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "../../../assets/icons";

const data = [
  {
    id: 1,
    img: "data:image/jpeg;base64,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",
    title: "Un Verano Sin Ti",
  },
  {
    id: 2,
    img: "data:image/jpeg;base64,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",
    title: "Mr. Morale",
  },
  {
    id: 3,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFAAUAMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAUGAQIHAP/EADMQAAIBAwIDBQYFBQAAAAAAAAECAwAEERIhBTFhBhMiQVEUI3GRseEyUmJyc0KBodHx/8QAGQEAAwEBAQAAAAAAAAAAAAAAAgMEAAEF/8QAHhEAAwEAAwEBAQEAAAAAAAAAAAERAgMhMRJBMhP/2gAMAwEAAhEDEQA/AJKKA8sYNHWDHlUzNaBmaRRuGOR0zQTDgcq8rShenSP7nes91ToC8sV7StAGJGPFZVN6aIGa1IUCsYWdaA6amxR5pVXnS5ulB2XNcp1I0mXbApCWBmYIgyx50407O+lE3o6wiO2Zv6yNzRI3hbNGz4/M31NC4vFoUyx7A8wKfRAVkxnIY+XWvX0GpSemKo5M1E2NRlSaCZwWDDf9P3qrcW4vdWd5Nbi9AZceExE4yOWw+Hzq/wB3wWLTGUuZWLeNgGAI6ZAzjpmqX2p4TdLxMyW9uzpKgJKQ6t+W5wfQVPhR9lWGtuFbk7QcXydN5Hj+OhLx3i5PjvlA88R/anZOF8RZCBaTg7Hww9egrDWPEAN7ebP8P2qj6zPEd/x7/ownFbsxxSm4mn1XAVgqcl5narnHCRHuTj9K5pTsxYSx8PJnRhI0hPiTSceVS8sWBuo+VL3H+C305ROJNLHwOMjOXHWjuMWp2okYVdOrGNJqQtOGTXSBpIzHb53LbE/AUKTbiONztk+n4W8vEfrRboe6oa/hb9x+tKurjiVwxDhCgwcHSfw/eqtPomybEUN4wfKi17FKgyi3cD0rxtx6U2FrOmjWQKR7QADlVds+KPxK7vYRw65ght3KLPJjEhBwduY9R0q3SgIjM3JRk1Vuz8d7xa6e5R2SKQ6grDIfOcbfD6ChefwPPjbJ7gcEbW5kZFLBtiRuKm3Hu8dR9aiezkwuLa40QNHGkzIjMwIcDAJH981NFcjHUU3iUyK36Ig+Bv3H60S4Pu6GFJOc+HOcVrcviKs/DIHmsg0EPWQ1KTDgwDWwNa2sRuJCoYKAMkmszxmCTQSD6EedMXlBMNvtXNuyvbS8veN3XD3trY2iM41LrVz49IydXUZrobufKuIdhikHFHLt76S6EXyZT/uqOFJ2ieXTzIdx4OwFjsABk4A5CpZDqwarMF7JBbaUjDefPFS/C+KQXYEWHjm/Kw5/A0ji0pBu06C75VXnv6UvLmVfHy9BScc/qcmid/tzpenQ0oFEKDy/zWwhQ/8AaX7/AK17v6FJBD3sMUkTqs7xsyka42KsvUEcqwtlHDDGnfPIVUAs7Es2BzJ8zWtncAMdVZubgatqakoA7RW9hkFrN7OhaXQe73/qxtz61ybs/wBi+0VpxO0lubRRGLtGlPegkKDkt1yMjbfPpXXfacChpdrq8qZx7+LBe8fforJbSRIe6U6fymtbRyp80YHPUVJ+0oV8qWujA0JJHvM7EelK+Eu0M+r6f//Z",
    title: "Harry's House",
  },
  {
    id: 4,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFAAUAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQMEBQYCB//EAC4QAAIBAwIEBAUFAQAAAAAAAAECAwAEERIhBTFBYRMyUYEGFCJxkSNSscHRcv/EABkBAAMBAQEAAAAAAAAAAAAAAAACAwEEBf/EAB0RAAICAwEBAQAAAAAAAAAAAAABAhEDITESQWH/2gAMAwEAAhEDEQA/APDaKKKACpFraS3OrwwMLzJoso/EuUXKjfOWGRV3JOVgheBEJ5ShV82OVPCN9JZMnnSK6bhbQyQoZAWkAJXGCuaW44UyMghbWWONONx/tSEuPmLkSSEEL5fWnfEZp2fOFU498VXxAg8uRMrZLBlikdCWw4VVxuwOentUIggkEYIrRHEgZw4V85DYxyqLxizfwIrsJs4+ojr3pZ49Wh8ee3UimoooqJ0hRRRQBZcO+VgZZp2fWFbSqnfV0zTRk0DCH6egz/VPxzxOgWKABQBlmbLEgb+3ao+nxLggLgjpTp0iTVy2TLCyupmUpCcE8zip17Y3sSqGgbdskruDVlwbULMzA5VCq99zitbw3aPMiZ2674p43wjOrs81WNyzEqQTt9qmSNNIpgQ5SNMaWOPv71pvieyWSP5iDIljwDg81zWWXWswiGpXJyfb1qseEZdszrqUYqeYODXNSeIW0lrdPHMQWznIOajVyvTPQTtWFFFFYaSYJjHEwCg+priEu0n0khm6g1zDgsV6tsD6VYcMkELsmASxwDiizK+llwc3sl/Hw0SgxzIGyD5eoz37VMiveN2fEjaOxYBwvLOc8v451H+GbqFOOSzzLNpVCEaNckGtPbtb8Wu1MkQ8ULqRpI8a17g9QQarH8ISS+jMc0nEeHTl3wxQr5NJB7j2qg0S24ZXcMiYIOnfB71teIhIolCIF1HkKyfxQkdjaRwKRnV4oGeWwAH5J/FUi/NsjKPukjJXzarmQ4AOo5xyqPXRJJyeZpK52dqVISilpKw06TGsZ5ZqekbpcF0U4ztnvVdVnZ3SggSZKkY/5+1auiy4WHA3vWWYRWzTRkAMFIBGDWjs7+RLyGLiEUiso/SdsZB5FcjmOR9qg8CjsoyFQOpBzuTj8+4q14jZsZUuEZWxETpOWq6jKjllODbJju80wAyeoOB1rE/GU4n4gQXVmQ6QFYEAD175zV5d8XSysl1SnxW/ZzwayZuRc24jugWZTmOYeZB1U/uH8dPSsyJqNIbDuTbK6kpx4mXOMMPVTmm6gdQZpKWigBK6RtJ57daShRk4oAtbS8MeGSU5xg6vzy9q0EV7dzQtNPMPlhvq2225DFZyy4aZAsjn9FlOT6U1JI0CNapKTGzZNUU2iEsUWxb25a6d5SSV8qA9FFNr5dqaHmZe9Ocq1DNJaQnWhkVuYo70o3pqA//Z",
    title: "Dawn FM",
  },
  {
    id: 5,
    img: "data:image/jpeg;base64,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",
    title: "Midnights",
  },
  {
    id: 6,
    img: "data:image/jpeg;base64,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",
    title: "Multitude",
  },
];

function Firstsec() {
  function getAverageRGB(imgEl) {
    var blockSize = 5, // only visit every 5 pixels
      defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
      canvas = document.createElement("canvas"),
      context = canvas.getContext && canvas.getContext("2d"),
      data,
      width,
      height,
      i = -4,
      length,
      rgb = { r: 0, g: 0, b: 0 },
      count = 0;

    if (!context) {
      return defaultRGB;
    }

    height = canvas.height =
      imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
    width = canvas.width =
      imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

    context.drawImage(imgEl, 0, 0);

    try {
      data = context.getImageData(0, 0, width, height);
    } catch (e) {
      /* security error, img on diff domain */ alert("x");
      return defaultRGB;
    }

    length = data.data.length;

    while ((i += blockSize * 4) < length) {
      ++count;
      rgb.r += data.data[i];
      rgb.g += data.data[i + 1];
      rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
  }

  
  function valueToHex(c) {
      
      var hex = c.toString(16);
      
      return hex
      
    }
    
    function rgbToHex(r, g, b) {
  
      return(valueToHex(r) + valueToHex(g) + valueToHex(b));
    
    }

  return (
    <div className="z-50">
      <h1 className=" text-3xl font-bold mb-6">Good evening</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4 gap-x-6">
        {data.map((album) => {
          return (
            <NavLink key={album.id}>
              <div
                onMouseOver={() => {
                    let rgb = getAverageRGB(document.getElementById(`img${album.id}`));
                    document.querySelector("#gradient").classList = `transition-all duration-500 ease-in w-full h-96 z-10 bg-gradient-to-b from-transparent to-[#121212] absolute -top-[60px]`
                    document.querySelector("#gradient").style.backgroundColor = `#${rgbToHex(rgb.r,rgb.g,rgb.b)}`
                    
                }}
                onMouseOut={(e) => {
                  document.querySelector("#gradient").classList = "transition-all duration-500 ease-in w-full h-96 z-10 bg-gradient-to-b from-transparent to-[#121212] absolute -top-[60px]"
                  document.querySelector("#gradient").style.backgroundColor = "transparent"
                }}
                className=" group relative cursor-pointer transition-all duration-300 hover:bg-[#505050] overflow-hidden flex font-bold items-center gap-4 bg-[#272727] rounded"
              >
                <img
                  id={`img${album.id}`}
                  className=" shadow-xl shadow-black"
                  src={album.img}
                  alt=""
                />
                {album.title}
                <div className=" opacity-0 group-hover:opacity-100 transition-all hover:scale-105 duration-300 absolute right-2 top-1/2 -translate-y-1/2 bg-brand-color p-[0.8rem] shadow-xl shadow-black rounded-full">
                  <Icon size={20} name="PlayBlack" />
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Firstsec;