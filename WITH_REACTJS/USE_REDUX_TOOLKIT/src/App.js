import React, { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementAge, incrementAgeByPayLoad } from "./store/slices/usersSlice";
import getAllUsersHandler from "./store/actions/users";

function App() {
  const users = useSelector((store) => store.users);
  const dispatch = useDispatch();

  console.log("users ::", users);

  const incrementAgeHandler = () => {
    dispatch(incrementAge());
  };

  const incrementAgeByPayloadHandler = (value) => {
    dispatch(incrementAgeByPayLoad(value));
  };

  useEffect(() => {
    dispatch(getAllUsersHandler());
  }, []);

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
