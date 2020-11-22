import React from "react";
import "./userOutput.css";
const userOutput = (props) => {
  return (
    <div className="userOutput">
      <p>My name is {props.userName}</p>
      <p>Am I overwritten?!</p>
    </div>
  );
};

export default userOutput;
