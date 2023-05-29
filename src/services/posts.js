// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi", // unique key to define where a cache is store in redux
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3600/", //fetchBaseQuery:-fetch wrapper which is automatically handles the request headers and response parsing same as axios
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      // transformResponse: (response) => {
      //   console.log("transform response", response);
      //   return response;
      // },
      // // Pick out errors and prevent nested properties in a hook or selector
      // transformErrorResponse: (response, meta, arg) => {
      //   console.log("transform status", response.status);
      //   return response.status;
      // },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery } = postApi;
