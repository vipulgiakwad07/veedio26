// import { Component } from "react";
// import { Dashboard } from "../components/dashboard";
// import "./styles.css";
// import React from "react";
// // import { NavLink } from "react-router-dom";
// // import {Editor} from "../components/Editor/index"

// export default function App() {
//   return (
//     <div className="App">
//       <Dashboard />
//       {/* <Editor /> */}
//     </div>
//   );
// }
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Dashboard } from "../components/dashboard";
// import React from "react";
// // import './App.css';
// import Navbar from "../components/navbar";

// import { Editor } from "../components/Editor/editor";

// export function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Dashboard />} />
//         <Route path="/editor" element={<Editor />} />
//       </Routes>
//     </Router>
//   );
// }
import {
  BrowserRouter as Router,
  Routes,
  Route /*Navbar*/
} from "react-router-dom";
import React from "react";
 import { Dashboard } from "./component/dashboard";
 import { Editor } from "./component/Editor/editor";

export /*class*/ function App() /*extends React.Component*/ {
  // render() {
  return (

    <>
  
      <Router>
        {/* <Navbar> */}
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/editor" element={<Editor />} />
        </Routes>
        {/* </Navbar> */}
      </Router>
    </>
  );
  // }
}