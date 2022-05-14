import "./App.css";
import Keypad from "./Keypad";
import { useState } from "react";

function App() {
  const [screenText, setScreenText] = useState("");
  const [isAccessGranted, setisAccessGranted] = useState("Enter Passcode");

  const keypadButtons = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "<-",
    "0",
    "√",
  ];
  const handleClick = (e) => {
    if (e.target.textContent === "<-") {
      setScreenText((oldText) => oldText.slice(0, -1));
    } else if (e.target.textContent === "√" && screenText !== "1024") {
      setisAccessGranted("Access Denied");
    } else if (e.target.textContent === "√" && screenText === "1024") {
      setisAccessGranted("Access Granted");
    } else {
      setisAccessGranted("Enter Passcode");
      setScreenText((oldText) => (oldText += e.target.textContent));
    }
  };
  const keypadElements = keypadButtons.map((btn) => {
    return <Keypad value={btn} handleClick={handleClick} />;
  });
  return (
    <div className="keypad-container">
      <h1 className="accessText">{isAccessGranted}</h1>
      <div className="keypad-screen">
        <div className="keypad-text">{screenText}</div>
      </div>
      <div className="keypad-grid">{keypadElements}</div>
    </div>
  );
}

export default App;
