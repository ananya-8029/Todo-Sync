import React from 'react'
import { useState } from "react";
import "@/app/globals.css";

const TaskBar = ({heading,description}) => {
  const [tasks,setTasks] = useState([]);
  setTasks([...tasks, {heading, description}])
  return (
    <>
    <div id="sidebar">
      <h1>Hello, User</h1>
    </div>
    </>
  )
}

export default TaskBar
