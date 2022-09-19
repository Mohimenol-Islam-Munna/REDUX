import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { fetchAllUserActionHandler } from "./store/actions/usersActions";

function App() {
  const {users} = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("users state ::", users);

  const incrementAgeHandler = () => {};

  const incrementAgeByPayloadHandler = (value) => {};

  useEffect(() => {
    dispatch(fetchAllUserActionHandler());
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
