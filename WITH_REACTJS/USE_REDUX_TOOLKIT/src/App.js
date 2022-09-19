import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchAllUserActionHandler,
  fetchOneUserActionHandler,
  createUserActionHandler,
  updateUserActionHandler,
} from "./store/actions/usersActions";

function App() {
  const { users } = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("users state ::", users.users);

  // fetch Single User Handler
  const fetchSingleUserHandler = () => {
    dispatch(fetchOneUserActionHandler());
  };

  // create user
  const createUserHandler = (data) => {
    dispatch(createUserActionHandler(data));
  };

  // update user
  const updateUserHandler = (data) => {
    dispatch(updateUserActionHandler(data));
  };

  // fetch all users
  useEffect(() => {
    dispatch(fetchAllUserActionHandler());
  }, []);

  return (
    <div className="App">
      <h2>REDUX TOOLKIT</h2>

      <div style={{ marginTop: "20px" }}>
        <button onClick={() => fetchSingleUserHandler()}>
          Fetch Single User
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            createUserHandler({
              name: "Md Mohimenol Islam",
              job: "React Js Developer",
            })
          }
        >
          Create User
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            updateUserHandler({
              name: "Md Mohimenol Islam Munna",
              job: "Full Stack Javascript Developer",
            })
          }
        >
          Update User
        </button>
      </div>
    </div>
  );
}

export default App;
