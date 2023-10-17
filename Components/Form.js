"use client";
import { useState } from "react";
import "./Form.css";
// import TaskBar from "./TaskBar.js";

const Form = () => {
  //creating variables for storing title  and description
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const setHandler = (e)=>{
    //this basically will prevent reloading the page once we click on add task button
    e.preventDefault();
    setTasks([...tasks, {heading, description}])
    setHeading("")
    setDescription("")
    console.log(tasks);
  }

  const deleteHandler = (i)=>{
    let duplicate = [...tasks];
    duplicate.splice(i,1)
    setTasks(duplicate)
  }

  let task = <h3>No task available</h3>
  if(tasks.length > 0)
  task = tasks.map((t,i)=>{
    return(
      <div key={i}>
        <h3 className="text-lg">{t.heading}</h3>
        <p className="text-sm">{t.description}</p>
        <button 
        onClick={()=>{
          deleteHandler(i);
        }}
        className="bg-red-500">Delete</button>
      </div>
    )
  })
  
  return (
    <>
    <div id="container">
      {/* <div id="taskslist">
        <ul>
          {task}
        </ul>
      </div> */}
      <form onSubmit={setHandler}>
        <input 
        type="text" 
        className="heading" 
        value={heading}
        onChange={(event)=>{
            setHeading(event.target.value)
        }}
        placeholder="Task" />

        <input 
        type="text" 
        className="description" 
        value={description}
        onChange={(event)=>{
            setDescription(event.target.value)
        }}
        placeholder="Task Description" />

        <button className="btn">+ ADD TASK</button>
      </form>
      
      </div>
    </>
  );
};

export default Form;
