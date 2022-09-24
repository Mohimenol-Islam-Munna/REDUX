import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    fetchAllUsers: builder.query({
      query: () => "/api/users",
    }),
  }),
});

export const {useFetchAllUsersQuery} = applicationApi;
export default applicationApi; 
