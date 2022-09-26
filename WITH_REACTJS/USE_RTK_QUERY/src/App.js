import { useState } from "react";
import SelectFromResult from "./components/SelectFromResult";

import "./App.css";
import {
  useGetAllUsersQuery,
  useGetUserQuery,
  useCreateUserMutation,
} from "./RTKQueryServices/api/applicationApi";

const App = () => {
  const [fetchUser, setFetchUser] = useState(false);
  const [
    createUser,
    {
      isLoading: createUserLoading,
      error: createUserError,
      data: createUserData,
    },
  ] = useCreateUserMutation();

  console.log("createUserData ::", createUserData);

  const { isLoading, isRefetching, error, data, refetch } = useGetAllUsersQuery(
    undefined,
    {
      skip: false,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: true,
    }
  );

  // refetch all user handler
  const refetchAllUser = () => {
    console.log("refetch all user handler ::");
    refetch();
  };

  const {
    isLoading: userLoading,
    isRefetching: userRefetching,
    error: userError,
    data: userData,
  } = useGetUserQuery(
    { name: "get single user ", id: 8 },
    {
      skip: !fetchUser,
      pollingInterval: 6000,
    }
  );

  const createUserHandler = (data) => {
    console.log("create user handler :", data);
    createUser(data);
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

      <div style={{ marginTop: "0.8rem" }}>
        <button onClick={() => refetchAllUser()}>reFetch All User</button>
      </div>

      <div style={{ marginTop: "0.8rem" }}>
        <button onClick={() => setFetchUser(true)}>Fetch Single User</button>
      </div>

      {userData && (
        <div
          style={{
            width: "80%",
            backgroundColor: "lightgray",
            padding: "0.5rem",
            border: "0.1rem solid palegreen",
            margin: "1rem auto",
          }}
        >
          <h2>Name : {`${userData.name}`}</h2>
          <p>Color : {userData.color}</p>
        </div>
      )}

      <div style={{ marginTop: "0.8rem" }}>
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

      <div
        style={{
          width: "80%",
          margin: "1.5rem auto",
          backgroundColor: "lightgray",
          padding: "0.5rem",
          border: "0.1rem solid palegreen",
        }}
      >
        <SelectFromResult id={3} />
      </div>
    </div>
  );
};

export default App;
