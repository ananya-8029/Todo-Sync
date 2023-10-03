"use client"
import React,{ useState } from 'react'

const Login = () => {
  return (
    <>
      <form>
        <input 
        placeholder="Enter your Email"
        type="email"/>

        <input
        placeholder="Enter your password"
        type="password"/>
      </form>
    </>
  )
}

export default Login
