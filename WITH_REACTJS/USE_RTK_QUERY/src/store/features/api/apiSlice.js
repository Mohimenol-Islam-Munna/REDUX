import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

const applicationApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/api/users",
    }),

    createUser: builder.mutation({
      query: (data) => ({ url: "/api/users", method: "POST", body: data }),
    }),
  }),
});

export const { useGetUserQuery, useCreateUserMutation } = applicationApiSlice;
export default applicationApiSlice;
