import { Routes, Route } from "react-router-dom";
import Home from "./content/Home";
import Search from "./content/Search";

import { useLocation } from "react-router-dom";

function Content() {
  const location = useLocation();
  return (
    <main className="h-full z-20 rounded-b bg-[#121212]">
      <div className=" ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
