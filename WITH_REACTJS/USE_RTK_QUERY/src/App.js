import { useState } from "react";
import "./App.css";
import {
  useGetAllUsersQuery,
  useGetUserQuery,
} from "./RTKQueryServices/api/applicationApi";

const App = () => {
  const [fetchUser, setFetchUser] = useState(false);

  const { isLoading, isRefetching, error, data } = useGetAllUsersQuery();
  const {
    isLoading: userLoading,
    isRefetching: userRefetching,
    error: userError,
    data: userData,
  } = useGetUserQuery(
    { name: "get single user ", id: 8 },
    {
      skip: !fetchUser,
    }
  );

  console.log("userLoading ::", userLoading);
  console.log("userData ::", userData);

  const createUserHandler = () => {
    console.log("create user handler");
  };

  return (
    <div className="App">
      <h2 style={{ textTransform: "uppercase" }}>Awesome RTK Query</h2>

      <div
        style={{
          border: "0.1rem solid salmon",
          padding: "1rem",
          width: "80%",
          margin: "2rem auto",
        }}
      >
        {data?.data.map((user) => (
          <div
            key={user.id}
            style={{
              backgroundColor: "lightgray",
              padding: "0.5rem",
              border: "0.1rem solid palegreen",
              margin: "0.3rem 0",
            }}
          >
            <h2>Name : {`${user.first_name} ${user.last_name}`}</h2>
            <p>Email : {user.email}</p>
          </div>
        ))}
      </div>

      <div>
        <button onClick={() => setFetchUser(true)}>Fetch User</button>
      </div>

      <div>
        <button
          onClick={() =>
            createUserHandler({
              name: "Md Mohimenol Islam Munna",
              job: "React Developer",
            })
          }
        >
          Create User
        </button>
      </div>
    </div>
  );
};

export default App;
