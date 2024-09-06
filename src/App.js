import React, { Component, useState } from "react";
import { Value } from "./Value";
import './App.css';

// Create a counter in react when we click on (+) plus value should be increasing and vice versa on clicking of (-) minus button
// The value render will be on parent and we need to use the child component for buttons (common)
// The button component  should not re render multiple times
const App = () => {
  const [textValue, setTextValue] = useState(0);

  const plusFunc = () => {
    setTextValue(textValue + 1);
  };

  const minusFunc = () => {
    setTextValue(textValue - 1);
  };

  return (
    <div className="App">
      <div>
        {textValue}
        <Value minusFunc={minusFunc} plusFunc={plusFunc} />
      </div>
    </div>
  );
};

export default App;
