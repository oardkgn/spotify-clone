import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Bottombar from "./components/Bottombar";
import Upperbar from "./components/Upperbar";
import { useState } from "react";

import { BrowserRouter } from "react-router-dom";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  if (isLogin) {
    document.querySelector("body").style.backgroundColor = "black"
  }else{
    document.querySelector("body").style.backgroundColor = "#121212"
  }

  return (
    <>
      <BrowserRouter>
        <div className="flex h-[calc(100%-65px)]">
          <Sidebar isLogin={isLogin} />

            <div className={"flex flex-col bg-black w-full overflow-hidden" + (isLogin && " pt-2")}>
              <div className={isLogin && " rounded bg-[#121212]  pr-2 h-[calc(100%-70px)]"}>
              <Upperbar isLogin={isLogin} />
              <Content />
              </div>
            </div>

        </div>
        <Bottombar />
      </BrowserRouter>
    </>
  );
}

export default App;
