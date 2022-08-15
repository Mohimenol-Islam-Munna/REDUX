import React from "react";
import { useSelector } from "react-redux";
import useAllPost from "./fetchData/useAllPost";
import "./App.css";

function App() {
  const post = useSelector((store) => store.post);
  const allPost = useAllPost();

  console.log("post state in app.js ::", post);

  return (
    <div className="App">
      <h2>REACT REDUX A2Z PRACTICE</h2>
      <h3>Data Name: {post?.postStateTitle}</h3>
    </div>
  );
}

export default App;
