import React, { useEffect } from "react";
import "./App.css";

function App() {
  const incrementAgeHandler = () => {};

  const incrementAgeByPayloadHandler = (value) => {};

  return (
    <div className="App">
      <h2>REDUX TOOLKIT</h2>
      <button onClick={incrementAgeHandler}>Increment Age</button>

      <button onClick={(e) => incrementAgeByPayloadHandler(10)}>
        Increment Age By Payload
      </button>
    </div>
  );
}

export default App;
