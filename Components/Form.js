"use client";
import { useState } from "react";
import axios from "axios";
import "./Form.css";
import { connect } from "react-redux";
import { addTasks } from "../app/redux/reducer.js";
import { useRouter } from "next/navigation";

const mapStateToProps = (state) => {
  return {
    tasks: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (obj) => dispatch(addTasks(obj)),
  };
};
const Form = (props) => {
  //creating variables for storing title  and description
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");

  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/tasks/addtask",
        {
          task,
          description,
          tag,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.error) {
        alert(response.data.error);
      } else {
        alert(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setHandler = (e) => {
    //this basically will prevent reloading the page once we click on add task button
    e.preventDefault();
    setHeading("");
    setDescription("");
  };

  return (
    <>
      <div id="container">
        <form action="POST" onSubmit={setHandler}>
          <div className="input-field">
            <label>Tasks</label>
            <input
              type="text"
              className="heading"
              value={task}
              onChange={(event) => {
                setTask(event.target.value);
              }}
              placeholder="Task"
            />
          </div>

          <div className="input-field">
          <label>Description</label>
          <input
            type="text"
            className="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder="Task Description"
          />
          </div>

          <div className="input-field"> 
          <label>Tag</label>
          <input
            type="text"
            className="tag"
            value={tag}
            onChange={(event) => {
              setTag(event.target.value);
            }}
            placeholder="Any specific tag"
          />
          </div> 

          <button className="btn" onClick={handleSubmit}>
            + ADD TASK
          </button>
        </form>
      </div>
    </>
  );
};

// connecting this component with redux store
export default connect(mapStateToProps, mapDispatchToProps)(Form);
