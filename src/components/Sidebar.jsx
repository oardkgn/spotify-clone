import logo from "../assets/svg/logo.svg"
import Menu from "./sidebar/menu"

function Sidebar() {
  return (
    <div className=" bg-black w-[262px] p-6">
        <img src={logo} alt="" />
        <Menu />
    </div>
  )
}

export default Sidebar