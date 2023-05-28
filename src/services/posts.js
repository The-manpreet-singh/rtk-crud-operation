// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi", // unique key to define where a cache is store in redux
  baseQuery: fetchBaseQuery({
    baseUrl: " https://api.instantwebtools.net/v1", //fetchBaseQuery:-fetch wrapper which is automatically handles the request headers and response parsing same as axios
    tagTypes: ["Posts"],
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: (page = 1) => ({
        url: `passenger?page=${page}&size=10`,
        method: "GET",
        providesTags: ["Posts"],
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery, usePrefetch } = postApi;
