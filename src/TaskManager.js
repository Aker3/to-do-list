import "./App.css";
import React, { useState } from "react";
import TaskListElement from "./TaskListElement";
import AddTaskForm from "./AddTaskForm";

//parent component
function TaskManager(props) {
  const [tasks, setTasks] = useState(props.data);
  const [tasks2, setTasks2] = useState(props.data2);

  function addTask(name) {
    let arrayTasks = [...tasks, [tasksSize++, name]];
    arrayTasks = arrayTasks.map((val, index) => {
      val = [index, val[1]];
      return val;
    });
    let arrayTasks2 = [...tasks2].map((val, index) => {
      val = [index + arrayTasks.length, val[1]];
      return val;
    });
    tasksSize = arrayTasks.length + arrayTasks2.length;
    let newtasks = new Map([...arrayTasks]);
    let newtasks2 = new Map([...arrayTasks2]);
    setTasks(newtasks);
    setTasks2(newtasks2);
  }

  function deleteTask(target) {
    let tasks_ = target.name === "column1" ? tasks : tasks2;
    tasks_ = new Map(
      [...tasks_].filter(function (value, index, arr) {
        return index !== parseInt(target.id);
      })
    );
    console.log(tasks_);

    if (target.name === "column1") {
      setTasks([...tasks_]);
    } else {
      setTasks2([...tasks_]);
    }
  }

  function editTask(target) {
    let column = target.attributes["column"].value;
    // let id = target.id;
    let tasks_ = column === "column1" ? tasks : tasks2;
    tasks_ = [...tasks_].map((item, index) => {
      if (index === parseInt(target.id)) item = [item[0], target.textContent];
      return item;
    });

    console.log(tasks_);

    if (column === "column1") setTasks([...tasks_]);
    else setTasks2([...tasks_]);
  }

  function moveTask(target) {
    let tasks_ = target.name === "column1" ? tasks : tasks2;
    console.log(target.id);

    tasks_ = new Map(
      [...tasks_].filter(function (value, index, arr) {
        return index !== parseInt(target.id);
      })
    );
    console.log(tasks_);

    if (target.name === "column1") {
      setTasks([...tasks_]);
      setTasks2([...tasks2, [tasksSize++, target.value]]);
    } else {
      setTasks2([...tasks_]);
      setTasks([...tasks, [tasksSize++, target.value]]);
    }
  }
  return (
    <div>
      <AddTaskForm data={tasks} handleSubmit={addTask} />
      <div className="containerAll">
        <TaskListElement
          data={tasks}
          handleCLick={moveTask}
          handleCLickDelete={deleteTask}
          handleChange={editTask}
        />
        <TaskListElement
          data2={tasks2}
          handleCLick={moveTask}
          handleCLickDelete={deleteTask}
          handleChange={editTask}
        />
      </div>
    </div>
  );
}

let tasksSize = 0;

export default TaskManager;
