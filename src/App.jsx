import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Bottombar from "./components/Bottombar";
import Upperbar from "./components/Upperbar";
import { useState } from "react";

import { BrowserRouter } from "react-router-dom";

function App() {

  const [isLogin, setIsLogin] = useState(true)

  return (
    <>
      <BrowserRouter>
        <div className="flex h-[calc(100%-65px)]">
          <Sidebar isLogin={isLogin} />
          <div className="flex flex-col w-full">
            <Upperbar />
            <Content />
          </div>
        </div>
        <Bottombar />
      </BrowserRouter>
    </>
  );
}

export default App;
