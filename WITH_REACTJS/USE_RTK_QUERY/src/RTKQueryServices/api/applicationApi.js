import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../utils/baseUrl";

const applicationApi = createApi({
  reducerPath: "applicationReducerPath",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => "/api/users",
      transformResponse: (response, meta, arg) => {
        console.log("response :", response);
        console.log("meta :", meta);
        console.log("arg :", arg);

        return response.data;
      },
    }),
  }),
});

export const { useGetAllUsersQuery } = applicationApi;
export default applicationApi;
