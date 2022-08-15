import React from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const post = useSelector((store) => store.post);

  return (
    <div className="App">
      <h2>REACT REDUX A2Z PRACTICE</h2>
      <h3>Data Name: {post?.title}</h3>
    </div>
  );
}

export default App;
