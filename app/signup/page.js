"use client";
import React, { useState } from "react";
import axios from "axios";
import "./page.css";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/signup", {
          name,
          email,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("Try to login since the user already exist");
          } else if (res.data == "does not exist") {
            alert("User created");
          }
        })
        .catch((e) => {
          alert("Please enter valid data");
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Sign Up Form</h1>
      <form action="POST">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter Your name"
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Your email"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Create a strong password"
        />

        <button className="bg-slate-600" onClick={submit} type="submit">
          Create my Account
        </button>
      </form>
    </>
  );
};

export default page;
