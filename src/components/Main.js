import React from "react";
import KeypadButtons from "./Keypad/KeypadButtons";
import { useState } from "react";
import { nanoid } from "nanoid";
import { keypadButtons } from "./Utils/utils";
import KeypadScreen from "./Keypad/KeypadScreen";
import KeypadGrid from "./Keypad/KeypadGrid";
import AccessText from "./Keypad/AccessText";
import styled from "styled-components";

export default function Main() {
  const [screenText, setScreenText] = useState("");
  const [isAccessGranted, setisAccessGranted] = useState("Enter Passcode");

  const handleClick = (e) => {
    if (e.target.textContent === "⬅️") {
      setisAccessGranted("Enter Passcode");
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
    return (
      <KeypadButtons value={btn} handleClick={handleClick} id={nanoid()} />
    );
  });

  return (
    <>
      <MainWrapper>
        <AccessText isAccessGranted={isAccessGranted} />
        <KeypadScreen screenText={screenText}></KeypadScreen>
        <KeypadGrid keypadElements={keypadElements} />
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 1rem;
  gap: 1rem;
`;
