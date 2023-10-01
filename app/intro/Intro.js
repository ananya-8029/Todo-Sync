import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <div id="landing_page">
        <img id="logo" src="/images/logo.png" alt="Not Found" />
        <img id="bg4" src="/images/bg4.png" alt="" />
        <img id="bg5" src="/images/bg5.png" alt="" />
        <div id="content">
          <h2>
            Your personalised <span>TODO List.</span>
          </h2>
          <p>
            "Discover the art of achieving more with less stress through our
            elegant and powerful to-do list web app, crafted to simplify your
            tasks and amplify your productivity."
          </p>
        </div>

        <img id="bg1" src="/images/bg1.png" alt="" />
        <img id="bg2" src="/images/bg2.png" alt="" />
        <img id="bg3" src="/images/bg3.png" alt="" />
        <img id="bg6" src="/images/bg6.png" alt="" />
      </div>
    </>
  );
};

export default Intro;
