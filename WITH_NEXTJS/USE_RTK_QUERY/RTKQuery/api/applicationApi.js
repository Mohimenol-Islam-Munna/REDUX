import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const applicationApi = createApi({
  reducerPath: "applicationApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://reqres.in" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  tagTypes: ["Crickter"],
  endpoints: (builder) => ({
    allCrickter: builder.query({
      query: () => "/api/users?page=2",
      transformResponse: (response, meta, arg) => {
        return response;
      },
      providesTags: (result, error) => {
        return [{ type: "Crickter" }];
      },
    }),
  }),
});

export const {
  useAllCrickterQuery,
  util: { getRunningOperationPromises },
} = applicationApi;
export const { allCrickter } = applicationApi.endpoints;
export default applicationApi;
