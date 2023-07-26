import "./sidebar.css";
import { FcSettings } from "react-icons/fc";
import { TiMediaFastForward } from "react-icons/ti";
import { MdAudiotrack } from "react-icons/md";
import { MdSubtitles } from "react-icons/md";
import { CiText } from "react-icons/ci";
import { SiElement } from "react-icons/si";
import { GrTemplate } from "react-icons/gr";
import { CgMenu } from "react-icons/cg";
import {useState} from 'react';
import { BiVideo } from 'react-icons/bi';

export function Sidebar() {
  
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // 👇️ toggle shown state
    setIsShown(current => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };


  return (
    <div>
    <div className="sidebar">
      <div>
        <button>
          {" "}
          <CgMenu />{" "}
        </button>
      </div>
      <button className="settingbutton" onClick={handleClick} >
        <FcSettings />
        Setting
      </button>
      <button >
        <TiMediaFastForward />
        Media
      </button>
      <button  >
        <MdAudiotrack />
        Audio
      </button>
      <button >
        <MdSubtitles />
        Subtitles
      </button>
      <button>
        <CiText /> Text
      </button>
      <button >
        <SiElement />
        Elaments
      </button>
      <button >
        <GrTemplate /> Templates{" "}
      </button>
      <button >
     <BiVideo /> Record
      </button>
    </div>
     {/* <div className="ProjectSettings">
      hello
     </div> */}
    </div>
  );
}
