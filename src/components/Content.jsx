import { Routes, Route } from "react-router-dom";
import Home from "./content/Home";
import Search from "./content/Search";
import Library from "./content/Library";

function Content() {
  return (
    <main className="relative h-full z-20 rounded-b bg-[#121212]">
      <div className="w-full h-80 -z-10 bg-gradient-to-b from-[#1F1F1F] to-transparent absolute -top-[60px]"></div>
      <div className=" z-50 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
        </Routes>
      </div>
    </main>
  );
}

export default Content;
