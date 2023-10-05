"use client";
import React, { useState } from "react";
import axios from "axios";
import "./page.css";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User Login succesfully");
          } else if (res.data == "does not exist") {
            alert("User does not exist");
          }
        })
        .catch((e) => {
          alert("Invalid details");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form action="POST">
        <label>Email</label>
        <input type="email" value={email} onChange={(e)=>{ setEmail(e.target.value) }} placeholder="Enter your email" />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>{ setPassword(e.target.value) }}
          placeholder="Enter your password"
        />

        <button onClick={submit}>Login Now</button>
      </form>
    </>
  );
};

export default page;
