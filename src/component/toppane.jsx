import {React, ReactDOM } from 'react';

 
// import { AiFillFund } from "react-icons/ai";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import "./toppane.css";
// import { GoSearch } from "react-icons/go";
import { AiOutlineBell } from "react-icons/ai";
import ReactSearchBox from "react-search-box";


export function Toppane() {

  const size = {
    height: 105,
    width: 105
}
  return (
    <div className="top-pane">
      {/* left pane */}

      <div className="top-left-pane">
        {/* <input type="text" valu="search"></input> */}
        <ReactSearchBox placeholder="Search" value="Doe" className="reactSearchBox"/>
      </div>

      {/* right pane */}

      <div className="top-right-pane">
        <button className="btn-up ">Upgrade</button>
        <button className="btn-inv ">invite</button>
        <button className="qu-logo">
          <AiOutlineQuestionCircle style={{ fontSize: '2em',color:'red'}} />
        </button>
        <button  className="bell-logo">
          {" "}
          <AiOutlineBell style={{ fontSize: '2em'}}/>{" "}
        </button>
        <button  className="dp-img">DP</button>
      </div>
    </div>
  );
}

