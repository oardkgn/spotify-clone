import React from 'react'
import { useLocation } from 'react-router-dom'

function Gradient() {

    const location = useLocation();

  return (
    <div>
        {location.pathname == "/search" ? (
            
                  ""
                ) : (
                  <div
                    id="gradient"
                    className=" transition-all duration-500 ease-in w-full h-96 z-10 bg-gradient-to-b from-[#1F1F1F] to-transparent absolute top-0"
                  ></div>
                )}
    </div>
  )
}

export default Gradient