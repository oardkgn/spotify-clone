import { Routes, Route } from "react-router-dom"
import Home from "./content/Home"
import Search from "./content/Search"
import Library from "./content/Library"

function Content() {
  return (
    <main>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/library" element={<Library />} />
      </Routes>
    </main>
  )
}

export default Content