import { BsMic } from "react-icons/bs";

import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineSignal } from "react-icons/hi2";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineScissor } from "react-icons/ai";
// import ReactPlayer from "react-player";
// import { PlayerComponent } from "./PlayerComponent";
import "./middlepane.css";

export function MiddlePane() {
  const fl = { float: "left" };
  const text = { float: "left" };

  const navigate = useNavigate();

  const editorPage = () => {
    navigate("/editor");
  };

  return (
    <div className="mid-pane">
      <h1 style={fl}>
        Let's Create some <span>videos!</span>
      </h1>
      <div className="btn-mid" >
        <button onClick={editorPage} style={{fontSize:"2em"}}>
          <AiOutlineScissor style={{fontSize:"1em",color:'purple'}} />
          Create Project
        </button>
        <button style={{fontSize:"2em"}}>
          <AiOutlineVideoCamera  style={{fontSize:"1em",color:'orange'}}/>
          Record Videos
        </button>
       
      {/*lowwermiddle pane */}

      <div className="low-mid-pane">
        <h1 style={text}>My recent videos</h1>
       
      </div>
    </div>
    </div>
  );
}
