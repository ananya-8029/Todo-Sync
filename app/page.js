import React from 'react'
import Form from '@/Components/Form'
import Intro from "./intro/Intro.js";
import Login from "./login/Login.js";

const page = () => {
  return (
    <>
    <img id="logo" src="/images/logo.png" alt="Not Found" />
    <Intro/>
    {/* <div className="main">
      <h1 className="text-4xl text-center font-bold font-DancingScript mb-1.5 p-6 shadow-xl text-white">Start your day with some exciting activities </h1>
      <Form/>
    </div> */}
    </>
  );
}

export default page