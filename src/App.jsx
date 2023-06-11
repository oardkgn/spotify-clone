import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Bottombar from "./components/Bottombar";
import Upperbar from "./components/Upperbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Gradient from "./components/Gradient";


function App() {
  const [isLogin, setIsLogin] = useState(true);
  const [showUpper, setShowUpper] = useState(false);
  if (isLogin) {
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    document.querySelector("body").style.backgroundColor = "#121212";
  }

  return (
    <>
      <BrowserRouter>
        <div className={` overflow-hidden flex h-[calc(100%-77px)]`}>
          <Sidebar isLogin={isLogin} />

          <div
            className={
              "flex flex-col bg-black w-full overflow-hidden" +
              (isLogin && " pt-2")
            }
          >
            <div className="bg-[#121212] h-[calc(100%-10px)] mr-2 rounded">
              <div
                className={
                  isLogin &&
                  "content relative overflow-auto rounded bg-transparent z-40  pr-2 h-[calc(100%-10px)]"
                }
                onScroll={(e) => {
                  if (e.target.scrollTop > 100) {
                    setShowUpper(true)
                  }else{
                    setShowUpper(false)
                  }
                }}
                
                
              >
                <Gradient />
                <Upperbar showUpper={showUpper} isLogin={isLogin} />
                <Content />
              </div>
            </div>
          </div>
        </div>
        <Bottombar isLogin={isLogin} />
      </BrowserRouter>
    </>
  );
}

export default App;
