import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "We Use Large Language Models",
          "To Review Terms of Service Agreements",
          "So You Don't Have To!",
        ],
        autoStart: true,
        loop: true,
        // deleteSpeed: 150,
        delay: 45,
      }}
    />
  );
}

export default Type;
