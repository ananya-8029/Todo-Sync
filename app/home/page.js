"use client";
import React, { useState, useEffect } from "react";
import "./page.css";
import Form from "@/Components/Form";
import { useRouter } from "next/navigation";
import { connect } from "react-redux";
import { addTasks } from "../redux/reducer.js";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
  };
};

const Page = (props) => {
  const router = useRouter();
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
    addTaskbtn.classList.add("expanded");
    form.style.display = "flex";
    addTaskbtn.style.height = 5 * addTaskbtnHeight + "px";
    addbtn.style.display = "none";

    document.body.addEventListener("click", outsideClickHandler);
  };

  const collapseDiv = () => {
    const addTaskbtn = document.querySelector(".add-task-btn");
    const addbtn = document.querySelector(".add-btn");
    const form = document.querySelector(".form");

    const addTaskbtnHeight = addTaskbtn.offsetHeight;
    addTaskbtn.classList.remove("expanded");
    form.style.display = "none";
    addTaskbtn.style.height = addTaskbtnHeight / 5 + "px";
    addbtn.style.display = "flex";

    // Remove click event listener from the document body
    document.body.removeEventListener("click", outsideClickHandler);
  };

  const outsideClickHandler = () => {
    const addTaskbtn = document.querySelector(".add-task-btn");
    const form = document.querySelector(".form");

    // Check if the click is outside the div and form
    if (!addTaskbtn.contains(event.target) && !form.contains(event.target)) {
      collapseDiv();
    }
  };
  // needs to be uncommented....
  useEffect(() => {
    if (typeof window !== "undefined") {
      const authToken = localStorage.getItem("authToken");
      // console.log(authToken)
      if (!authToken) {
        router.push("/login");
      }
    }
  }, []);
  console.log(props);
  return (
    <>
      <div className="main">
        <div className="dark-main">
          <img className="logo" src="/images/home-logo.png" alt="" />
          <div className="main-container">
            <div className="taskbar">
              <div className="profile-container">
                {props.user ? <h1>{props.user.name}</h1> : <h1>Welcome!</h1>}
              </div>
            </div>
            <div className="notes-content">
              <div className="header"></div>
              <ul>
                {props.tasks.map((item) => {
                  return (
                    <li key={item._id}>
                      {item.task} 
                    </li>
                  );
                })}
              </ul>
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

// connecting this component with redux store

const ConnectedPage = connect(mapStateToProps, mapDispatchToProps)(Page);

export default ConnectedPage;
