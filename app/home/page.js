"use client";
import React, { useState } from "react";
import "./page.css";
import Form from "@/Components/Form";

const page = () => {
  // const [expanded, setExpanded] = useState("false");
  const toggleDiv = () => {
    expansion();
    // setExpanded(!expanded);
  };

  const expansion = () => {
    const addTaskbtn = document.querySelector(".add-task-btn");
    const addbtn = document.querySelector(".add-btn");
    const form = document.querySelector(".form");

    const addTaskbtnHeight = addTaskbtn.offsetHeight;
    addTaskbtn.classList.add('expanded');
    form.style.display = "flex";
    addTaskbtn.style.height = 5 * addTaskbtnHeight + "px";
    addbtn.style.display = "none";

    document.body.addEventListener('click', outsideClickHandler);
  };

  const collapseDiv = ()=>{
    const addTaskbtn = document.querySelector(".add-task-btn");
    const addbtn = document.querySelector(".add-btn");
    const form = document.querySelector(".form");

    const addTaskbtnHeight = addTaskbtn.offsetHeight;
    addTaskbtn.classList.remove('expanded');
    form.style.display = "none";
    addTaskbtn.style.height = addTaskbtnHeight/5 + "px";
    addbtn.style.display = "flex";

    // Remove click event listener from the document body
    document.body.removeEventListener('click', outsideClickHandler);
  }

  const outsideClickHandler = () => {
    const addTaskbtn = document.querySelector(".add-task-btn");
    const form = document.querySelector(".form");

    // Check if the click is outside the div and form
    if (!addTaskbtn.contains(event.target) && !form.contains(event.target)) {
        collapseDiv();
    }
  }

  return (
    <>
      <div className="main">
        <div className="dark-main">
        <img className="logo" src="/images/home-logo.png" alt="" srcset="" />
          <div className="main-container">
            <div className="taskbar">
              <div className="profile-container">
                <h1>Hello, User</h1>
              </div>
            </div>
            <div className="notes-content">
              <div className="add-task-btn">
                <div className="add-btn" onClick={toggleDiv}>
                  <span>+</span>
                  <h1>ADD TASK</h1>
                </div>
                <div className="form">
                  <Form />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
