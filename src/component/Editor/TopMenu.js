// import { AiFillFund } from "react-icons/ai";
import { FiCornerUpLeft } from "react-icons/fi";
import {FiCornerUpRight} from "react-icons/fi"
import "./topmenu.css"; 
// import { GoSearch } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import ReactSearchBox from "react-search-box";

export function TopMenu() {
  return (
    <div className="top-menu">
      {/* left menu */}

      <div className="top-left-menu">
        {/* <input type="text" valu="search"></input> */}
       <h3>Project Name</h3>
      </div>

      {/* right menu */}

      <div className="top-right-menu">
        
        <button className="qu-logo">
          <FiCornerUpLeft style={{size:"3em"}}/>
        </button>
        <button className="upright">
          {" "}
          <FiCornerUpRight />{" "}
        </button>
        

        <button className="btn-inv ">invite</button>
        <button className="btn-done ">Done</button>
      </div>
    </div>
  );
}
