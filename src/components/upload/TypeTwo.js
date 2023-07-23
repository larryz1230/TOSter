import React from "react";
import Typewriter from "typewriter-effect";

function TypeTwo() {
  return (
    <Typewriter
      options={{
        strings: ["Choose a file to upload!", "Or paste in the file!"],
        autoStart: true,
        loop: true,
        // deleteSpeed: 150,
        delay: 45,
      }}
    />
  );
}

export default TypeTwo;
