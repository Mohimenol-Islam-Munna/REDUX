import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPost } from "./store/actions/postAction";
import "./App.css";

function App() {
  const post = useSelector((store) => store.post);
  const dispatch = useDispatch();

  console.log("post state in app.js ::", post);

  useEffect(() => {
    dispatch(getAllPost());
  }, []);

  return (
    <div className="App">
      <h2>REACT REDUX A2Z PRACTICE</h2>
      <h3>Data Name: {post?.postStateTitle}</h3>
    </div>
  );
}

export default App;
