import Sidebar from "./components/Sidebar" 
import Content from "./components/Content" 
import Bottombar from "./components/Bottombar" 

import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="flex h-[calc(100%-90px)]">
    <Sidebar />
    <Content />
    </div>
    <Bottombar />
    </BrowserRouter>
    </>
  )
}

export default App
