import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import StudentForm from "./StudentForm";

const App = () => (
  <div className="container">
    <StudentForm/>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
