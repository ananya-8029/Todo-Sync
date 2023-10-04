"use client";
import React, { useState } from "react";
import axios from 'axios'
import "./page.css";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
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
        <label>Confirm Password</label>
        <input
          type="password"
          value={cpassword}
          onChange={(e) => {
            setCpassword(e.target.value);
          }}
          placeholder="Confirm the password"
        />

        <button type="submit">Create my Account</button>
      </form>
    </>
  );
};

export default page;
