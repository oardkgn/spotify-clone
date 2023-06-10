import LeftBottom from "./bottomBar/LeftBottom"
import MidBottom from "./bottomBar/MidBottom"
import RightBottom from "./bottomBar/RightBottom"



function Bottombar({isLogin}) {

if (!isLogin) {
  return (
    <div className="h-[77px] text-white flex justify-between items-center cursor-pointer bg-gradient-to-r from-[#AF2997] to-[#509BF5]">
      <div className=" pl-4">
      <h6 className=" text-[0.8rem] tracking-widest">PREVIEW OF SPOTIFY</h6>
      <p className="font-semibold">Sign up to get unlimited songs and postcasts with occasional ads. No credit card needed.</p>
      </div>
      <button className="py-3 px-4 mr-2 rounded-full bg-white text-gray-900 transition-all hover:scale-110">Sign up free</button>
    </div>
  )  
}else{
  return (
    <div className="h-[75px] pb-4 pt-2 px-4 text-white flex justify-between items-center bg-black">
        <LeftBottom />
        <MidBottom />
        <RightBottom />
    </div>
  )
}
}

export default Bottombar



