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
    }),
  }),
});

export const secondApi = createApi({
  reducerPath: "secondApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
  }),
});
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllPostQuery } = postApi;
export const { useGetAllPostsQuery } = secondApi;
