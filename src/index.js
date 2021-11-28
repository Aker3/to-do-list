import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TaskManager from "./TaskManager";

let tasks = new Map([]);
let tasks2 = new Map([]);
ReactDOM.render(
  <TaskManager data={tasks} data2={tasks2} />,
  document.getElementById("root")
);
