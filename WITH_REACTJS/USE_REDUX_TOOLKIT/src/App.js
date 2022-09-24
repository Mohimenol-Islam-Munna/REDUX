import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  fetchAllUserActionHandler,
  fetchOneUserActionHandler,
  createUserActionHandler,
  updateUserActionHandler,
  deleteUserActionHandler,
} from "./store/actions/usersActions";

import {
  fetchAllStudentsActionHandler,
  fetchSingleStudentActionHandler,
  createStudentActionHandler,
  updateStudentActionHandler,
  deleteStudentActionHandler,
} from "./store/actions/studentsActions";

function App() {
  const { users, students } = useSelector((store) => store);

  const dispatch = useDispatch();

  console.log("students state ::", students);

  // fetch Single User Handler
  const fetchSingleUserHandler = (id) => {
    dispatch(fetchOneUserActionHandler(id));
  };

  // fetch Single Student Handler
  const fetchSingleStudentHandler = (id) => {
    dispatch(fetchSingleStudentActionHandler(id));
  };

  // create user
  const createUserHandler = (data) => {
    dispatch(createUserActionHandler(data));
  };

  // create student
  const createStudentHandler = (data) => {
    dispatch(createStudentActionHandler(data));
  };

  // update user
  const updateUserHandler = (data) => {
    dispatch(updateUserActionHandler(data));
  };

  // update student
  const updateStudentHandler = (id, data) => {
    data.id = 7;
    dispatch(updateStudentActionHandler(data));
  };

  // fetch all users
  useEffect(() => {
    dispatch(fetchAllUserActionHandler());
  }, []);

  // fetch all student
  useEffect(() => {
    dispatch(fetchAllStudentsActionHandler());
  }, []);

  return (
    <div className="App">
      <h2>REDUX TOOLKIT</h2>

      <div
        style={{
          width: "85%",
          margin: "20px auto",
          border: "1px solid salmon",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => fetchSingleUserHandler(2)}>
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

        <div style={{ margin: "20px 0px" }}>
          <button onClick={() => dispatch(deleteUserActionHandler(8))}>
            Delete User
          </button>
        </div>
      </div>

      <div
        style={{
          width: "85%",
          margin: "20px auto",
          border: "1px solid salmon",
        }}
      >
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => fetchSingleStudentHandler(2)}>
            Fetch Single Sudent
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() =>
              createStudentHandler({
                name: "Md Mohimenol Islam",
                job: "Full Stack Js Developer",
              })
            }
          >
            Create Student
          </button>
        </div>

        <div style={{ marginTop: "20px" }}>
          <button
            onClick={() =>
              updateStudentHandler(7, {
                name: "Md Mohimenol Islam Munna 330",
                job: "Full Stack Developer",
              })
            }
          >
            Update Student
          </button>
        </div>

        <div style={{ margin: "20px 0px" }}>
          <button onClick={() => dispatch(deleteStudentActionHandler(8))}>
            Delete Student
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
