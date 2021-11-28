import "./App.css";
import React, { useState } from "react";

function AddTaskForm(props) {
  const [task, setTask] = useState("");

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(task);
    setTask("");
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="textField"
        type="text"
        placeholder="Add new task"
        onChange={handleChange}
        value={task}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTaskForm;
