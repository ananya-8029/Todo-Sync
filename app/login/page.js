"use client";
import React, { useState } from "react";
import axios from "axios";
import "./page.css";
import Link from 'next/link'

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:5000/login", {
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
      <img className="logo" src="/images/logo.png" alt="" />
      <div className="loginPage">
        <div className="loginForm">
          <h1>Proceed To Login</h1>
          <form action="POST">
            <div className="inputfield emailinput">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Type in your email"
              />
            </div>

            <div className="inputfield">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Key your password"
              />
            </div>

            <button className="loginbtn" onClick={submit}>Proceed</button>
            <p>New User? <Link href="/signup"><span>Create an Account.</span></Link></p>
          </form>
        </div>
        <div className="bgImg">
          <img src="/images/loginBg1.jfif" alt="" />
        </div>
      </div>
    </>
  );
};

export default page;
