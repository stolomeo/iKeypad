import "./App.css";
import Keypad from "./Keypad";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {
  const [screenText, setScreenText] = useState("");
  const [isAccessGranted, setisAccessGranted] = useState("Enter Passcode");
  const keypadButtons = [
    "1️⃣",
    "2️⃣",
    "3️⃣",
    "4️⃣",
    "5️⃣",
    "6️⃣",
    "7️⃣",
    "8️⃣",
    "9️⃣",
    "⬅️",
    "0️⃣",
    "✅",
  ];
  const handleClick = (e) => {
    if (e.target.textContent === "⬅️") {
      setScreenText((oldText) => oldText.slice(0, -3));
    } else if (e.target.textContent === "✅" && screenText !== "1️⃣0️⃣2️⃣4️⃣") {
      setisAccessGranted("Access Denied");
    } else if (e.target.textContent === "✅" && screenText === "1️⃣0️⃣2️⃣4️⃣") {
      setisAccessGranted("Access Granted");
    } else {
      setisAccessGranted("Enter Passcode");
      setScreenText((oldText) => (oldText += e.target.textContent));
    }
  };

  const keypadElements = keypadButtons.map((btn) => {
    return <Keypad value={btn} handleClick={handleClick} key={nanoid()} />;
  });

  return (
    <>
      <h1 className="title">Keypad</h1>
      <div className="keypad-container">
        <h2 className="accessText">{isAccessGranted}</h2>
        <div className="keypad-screen">
          <div className="keypad-text">{screenText}</div>
        </div>
        <div className="keypad-grid">{keypadElements}</div>
      </div>
    </>
  );
}

export default App;
