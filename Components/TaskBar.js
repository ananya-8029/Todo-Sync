"use client";
import React from "react";
import "./TaskBar.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    user: state.user,
  };
};

const TaskBar = (props) => {
  return (
    <>
      <div className="profile">
        {props.user ? <h1>{props.user.name}</h1> : <h1></h1>}
      </div>
      <div className="status-of-tasks">
        <div>
          <p>Important</p>
        </div>
        <div>
          <p>All</p>
        </div>
        <div>
          <p>Completed</p>
        </div>
      </div>
    </>
  );
};
export default connect(mapStateToProps, null)(TaskBar);
