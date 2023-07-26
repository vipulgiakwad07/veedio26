import React from "react";
import { VideoEditor } from "./VideoEditor";
import { Sidebar } from "./sidebar";
import { Projectpage } from "./Projectpage";
import { ProjectSettings } from "./ProjectSetting";
import "./editor.css";

export class Editor extends React.Component {
 

  render() {
    
    return (
      <div>
        <Sidebar />
        <ProjectSettings />
        <Projectpage />
        {/* <VideoEditor /> */}
      </div>
    );
  }
}
