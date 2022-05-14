import React from "react";
import "./App.css";

export default function Keypad(props) {
  return (
    <button className="keypad-btn" onClick={props.handleClick}>
      {props.value}
    </button>
  );
}
