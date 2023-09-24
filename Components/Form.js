"use client";
import React, { useState } from "react";
import "@/app/globals.css";

const form = () => {
  //creating variables for storing title and description
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const setHandler = (e)=>{
    //this basically will prevent reloading the page once we click on add task button
    e.preventDefault()
    console.log(heading)
    console.log(description)
    setHeading("")
    setDescription("")
  }

  return (
    <>
      <form className="font-Poppins" onSubmit={setHandler}>
        <input 
        type="text" 
        className="heading" 
        value={heading}
        onChange={(event)=>{
            setHeading(event.target.value)
        }}
        placeholder="Heading" />

        <input 
        type="text" 
        className="description" 
        value={description}
        onChange={(event)=>{
            setDescription(event.target.value)
        }}
        placeholder="Description" />

        <button className="btn">Add Task</button>
      </form>
    </>
  );
};

export default form;
