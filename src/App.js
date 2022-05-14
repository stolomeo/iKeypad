import "./App.css";

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
  return (
    <div className="keypad-container">
      <div className="keypad-screen"></div>
      <div className="keypad-grid"></div>
    </div>
  );
}

export default App;
