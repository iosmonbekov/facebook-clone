import React from "react";
import "./Letter.css";

export default function Letter(props) {
  return (
    <div className="letter">
      <div></div>
      <div>{props.text}</div>
    </div>
  );
}
