import "./App.css";
import Keypad from "./Keypad";

function App() {
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
  const keypadElements = keypadButtons.map((btn) => {
    return <Keypad value={btn} />;
  });
  return (
    <div className="keypad-container">
      <div className="keypad-screen"></div>
      <div className="keypad-grid">{keypadElements}</div>{" "}
    </div>
  );
}

export default App;
