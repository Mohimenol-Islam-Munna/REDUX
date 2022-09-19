import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchAllUserActionHandler,
  fetchOneUserActionHandler,
} from "./store/actions/usersActions";

function App() {
  const { users } = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("users state ::", users.user);

  // fetch Single User Handler
  const fetchSingleUserHandler = () => {
    dispatch(fetchOneUserActionHandler());
  };

  const incrementAgeByPayloadHandler = (value) => {};

  useEffect(() => {
    dispatch(fetchAllUserActionHandler());
  }, []);

  return (
    <div className="App">
      <h2>REDUX TOOLKIT</h2>
      <button onClick={() => fetchSingleUserHandler()}>
        Fetch Single User
      </button>

      <button onClick={(e) => incrementAgeByPayloadHandler(10)}>
        Increment Age By Payload
      </button>
    </div>
  );
}

export default App;
