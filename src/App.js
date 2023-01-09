import React, { useState } from "react";
import Button from "./Button";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = (event) => {
    event.preventDefault();
    setCounter(counter + 1);
  };

  const handleDecrement = (event) => {
    event.preventDefault();
    setCounter(counter - 1);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setCounter(0);
  };

  return (
    <>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Counter App</h1>
          <p class="lead">
            You can count up by clicking 'Increment' and count down by clicking
            'Decrement'. 'Reset' will bring the count back to 0.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="card text-center my-5">
          <div className="card-body">
            <h2>Try it out!</h2>
            <div className="my-5">
              <h3 className="my-5">{counter}</h3>
              <div className="buttons">
                <Button handleFunction={handleIncrement} name="Increment" />
                <Button handleFunction={handleDecrement} name="Decrement" />
                <Button handleFunction={handleReset} name="Reset" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
