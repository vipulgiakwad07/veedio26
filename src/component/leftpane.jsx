import "./leftpane.css";
import { AiOutlinePlus } from "react-icons/ai";
import { TbLetterD } from "react-icons/tb";
import { RiHome3Line } from "react-icons/ri";
import { FiFolder } from "react-icons/fi";
import { GrTemplate } from "react-icons/gr";
import { SiBuildkite } from "react-icons/si";
import { HiSignal } from "react-icons/hi2";

export function Leftpane() {
  return (
    <div className="sidebarh">
      <div>
        <h1>VEED.IO</h1>
      </div>
      <div>
        <button className="btn btn-light">
          <span className="user-letter">
            <TbLetterD />
          </span>
          User name
        </button>
      </div>
      <div>
        <button className="btn btn-primary">
          New video <AiOutlinePlus />
        </button>
      </div>
      <div className="btn btn-light">
        <RiHome3Line /> Home
      </div>
      <div className="btn btn-light">
        {" "}
        <GrTemplate /> Template
      </div>
      <div className="btn btn-light">
        <FiFolder /> All videos
      </div>
      <div className="btn btn-light">
        <HiSignal /> Product & shows
      </div>
      <div className="btn btn-light">
        <SiBuildkite /> Brand kit
      </div>
    </div>
  );
}
