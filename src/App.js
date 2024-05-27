import "./styles.css";
import React, { useState } from "react";

import { BrowserRouter as Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import List from "./List";
export default function App() {
  const [task, setTask] = useState("");
  const [todo, setTodo] = useState([]);
  const changehandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(task);
    const newtodo = [...todo, task];
    setTodo(newtodo);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newdo = todo.filter((todo, index) => index !== indexValue);
    setTodo(newdo);
  };
  return (
    <div className="App">
      <center>
        <h1>Todo List</h1>
        <h2>Management</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={task} onChange={changehandler} /> &nbsp;
          <input type="submit" value="add" />
        </form>
        <List todolist={todo} deleteHandler={deleteHandler} />
      </center>
    </div>
  );
}
