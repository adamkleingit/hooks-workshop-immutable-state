import React, { useState } from "react";
import ReactDOM from "react-dom";
import random from "./random";

function App() {
  const [numbers, setNumbers] = useState([]);
  console.log("render");
  const add = () => {
    numbers.push(random());
    setNumbers(numbers);
  };
  return (
    <div>
      <button onClick={add}>Add</button>
      {numbers.map((n, i) => (
        <div key={i}>{n}</div>
      ))}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
