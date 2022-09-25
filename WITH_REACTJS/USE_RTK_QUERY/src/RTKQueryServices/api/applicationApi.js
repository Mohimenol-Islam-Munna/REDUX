import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

const applicationApi = createApi({
  reducerPath: "applicationReducerPath",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["USERS"],
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users",

      transformResponse: (response, meta, arg) => {
        // console.log("response :", response);
        // console.log("meta :", meta);
        // console.log("arg :", arg);

        return response;
      },

      providesTags: (result, error) => {
        // console.log("result :", result);
        // console.log("error :", error);

        return [{ type: "USERS" }];
      },
    }),

    getUser: builder.query({
      query: ({ id }) => `/api/user/${id}`,

      transformResponse: (response, meta, arg) => {
        // console.log("response 2:", response);
        // console.log("meta 2:", meta);
        // console.log("arg 2:", arg);

        return response.data;
      },

      providesTags: (result, error, arg) => {
        // console.log("result 2:", result);
        // console.log("error 2:", error);
        // console.log("id 2:", arg);

        return [{ type: "USERS", id: arg.id }];
      },
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery } = applicationApi;
export default applicationApi;
