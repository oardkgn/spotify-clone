import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Bottombar from "./components/Bottombar";
import Upperbar from "./components/Upperbar";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Gradient from "./components/Gradient";
import { UserContext } from "./context";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [showUpper, setShowUpper] = useState(false);

  console.log(isLogin);

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
                  isLogin ?
                  "content relative overflow-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#898989] rounded bg-transparent z-40  h-[calc(100%-10px)]" :
                  "overflow-auto scrollbar scrollbar-track-transparent scrollbar-thumb-[#898989]"
                }
                onScroll={(e) => {
                  if (e.target.scrollTop > 100) {
                    setShowUpper(true);
                  } else {
                    setShowUpper(false);
                  }
                }}
              >
                <Gradient isLogin={isLogin} />
                <Upperbar showUpper={showUpper} isLogin={isLogin} setIsLogin={setIsLogin} />
                <Content isLogin={isLogin} />
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
