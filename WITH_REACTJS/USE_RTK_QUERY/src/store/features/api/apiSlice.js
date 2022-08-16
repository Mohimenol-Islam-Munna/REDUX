import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../../utils/baseUrl";

const applicationApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}` }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "/api/users",
    }),
  }),
});

export const { useGetUserQuery } = applicationApiSlice;
export default applicationApiSlice;
