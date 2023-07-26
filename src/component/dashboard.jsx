import React from "react";
import { Leftpane } from "./leftpane.jsx";
import "./dashboard.css"
import {Toppane}  from "./toppane.jsx";
import  {MiddlePane} from "./middlepane.jsx";
import { PlayerComponent}  from "./PlayerComponent.jsx";


// export class Dashboard extends React.Component {
//   return(){
export function Dashboard() {
  return (
    
    <div className="body">
      <Toppane />
      <Leftpane />
      <MiddlePane />
      <PlayerComponent />
    </div>
    
  );
}
