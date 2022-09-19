import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchAllUserActionHandler,
  fetchOneUserActionHandler,
  createUserActionHandler,
} from "./store/actions/usersActions";

function App() {
  const { users } = useSelector((store) => store);
  const dispatch = useDispatch();

  console.log("users state ::", users.users);

  // fetch Single User Handler
  const fetchSingleUserHandler = () => {
    dispatch(fetchOneUserActionHandler());
  };

  const createUserHandler = (data) => {
    dispatch(createUserActionHandler(data));
  };

  useEffect(() => {
    dispatch(fetchAllUserActionHandler());
  }, []);

  return (
    <div className="App">
      <h2>REDUX TOOLKIT</h2>
      <button onClick={() => fetchSingleUserHandler()}>
        Fetch Single User
      </button>

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() =>
            createUserHandler({
              name: "morpheus",
              job: "leader",
            })
          }
        >
          Create User
        </button>
      </div>
    </div>
  );
}

export default App;
