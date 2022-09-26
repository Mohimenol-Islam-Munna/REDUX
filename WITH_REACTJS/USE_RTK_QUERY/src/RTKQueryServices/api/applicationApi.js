import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

const applicationApi = createApi({
  reducerPath: "applicationReducerPath",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    // get all user
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

        return [{ type: "Users" }];
      },
    }),

    // get single user
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

        return [{ type: "Users", id: arg.id }];
      },
    }),

    // create user
    createUser: builder.mutation({
      query: (data) => ({
        url: `${baseUrl}/api/users/`,
        method: "POST",
        body: data,
      }),

      transformResponse: (response, meta, arg) => {
        console.log("arg ::", arg);
        console.log("response ::", response);

        return response;
      },
      invalidatesTags: ["Users"],

      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {},

      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
        }
      ) {},
    }),
  }),
});

export const { useGetAllUsersQuery, useGetUserQuery, useCreateUserMutation } =
  applicationApi;
export default applicationApi;
