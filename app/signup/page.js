"use client"
import React,{ useState } from 'react'
import "./page.css";

const page = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [cpassword,setCpassword]=useState('');
  return (
    <>
    <h1>Sign Up Form</h1>
    <form action="POST">
        <label>Name</label>
        <input type="text" value={name} placeholder="Enter Your name" />
        <label>Email</label>
        <input type="email" value={email} placeholder="Enter Your email" />
        <label>Password</label>
        <input type="password" value={password} placeholder="Create a strong password"/>
        <label>Confirm Password</label>
        <input type="password" value={cpassword} placeholder="Confirm the password" />
    </form>
    </>
  )
}

export default page
