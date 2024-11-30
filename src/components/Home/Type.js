import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Senior React Native Developer",
          "AI Integration Expert",
          "MERN Stack Developer",
          "Freelance Software Engineer",
          "Contract-based App Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
        delay: 40
      }}
    />
  );
}

export default Type;
