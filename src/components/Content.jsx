import { Routes, Route } from "react-router-dom"
import Home from "./content/Home"
import Search from "./content/Search"
import Library from "./content/Library"

function Content() {
  return (
    <main className="relative">
      <div className="w-full h-80 -z-10 bg-gradient-to-b from-[#1F1F1F] to-transparent absolute -top-[60px]"></div>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      </Routes>
    </main>
  )
}

export default Content