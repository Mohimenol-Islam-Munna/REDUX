import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

const applicationApi = createApi({
  reducerPath: "applicationReducerPath",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users",
    }),
  }),
});

export default applicationApi;
