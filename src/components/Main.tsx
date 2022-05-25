import KeypadButtons from "./Keypad/KeypadButtons";
import { useState } from "react";
import { nanoid } from "nanoid";
import { keypadButtons } from "./Utils/utils";
import KeypadScreen from "./Keypad/KeypadScreen";
import KeypadGrid from "./Keypad/KeypadGrid";
import KeypadAccessText from "./Keypad/KeypadAccessText";
import styled from "styled-components";
import { MouseEvent } from "react";

export default function Main() {
  const [screenText, setScreenText] = useState<string>("");
  const [accessText, setAccessText] = useState<string>("Enter Passcode");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { textContent } = e.target as HTMLElement;
    if (textContent === "⬅️") {
      setAccessText("Enter Passcode");
      setScreenText((oldText) => oldText.slice(0, -3));
    } else if (textContent === "✅" && screenText !== "1️⃣0️⃣2️⃣4️⃣") {
      setAccessText("Access Denied");
    } else if (textContent === "✅" && screenText === "1️⃣0️⃣2️⃣4️⃣") {
      setAccessText("Access Granted");
    } else {
      setAccessText("Enter Passcode");
      setScreenText((oldText) => (oldText += textContent));
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
        <KeypadAccessText accessText={accessText} />
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
