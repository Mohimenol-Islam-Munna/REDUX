import React from "react";
import { useGetAllUsersQuery } from "../RTKQueryServices/api/applicationApi";

const SelectFromResult = ({ id }) => {
  const { user } = useGetAllUsersQuery(undefined, {
    selectFromResult: ({ data }) => {
      let user = data?.data.find((user) => user.id == id);
      return {
        user: user,
      };
    },
  });

  return (
    <div>
      <h2>Select From Result</h2>
      <h3>{user?.first_name}</h3>
      <p>{user?.email}</p>
    </div>
  );
};

export default SelectFromResult;
