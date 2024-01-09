import { FaFire } from "react-icons/fa";
import {
  BsPlus,
  BsGearFill,
  BsFillLightningFill,
  BsSubtract,
} from "react-icons/bs";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col bg-gray-900 text-white shadow-lg">
      <SideBarIcon icon={<FaFire size={"28"} />} />
      <SideBarIcon icon={<BsPlus size={"28"} />} />
      <SideBarIcon icon={<BsSubtract size={"28"} />} />
      <SideBarIcon icon={<BsGearFill size={"28"} />} />
      <SideBarIcon icon={<BsFillLightningFill size={"28"} />} />
    </div>
  );
}

function SideBarIcon({ icon, text = "tooltip goes here" }) {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

export default SideBar;
