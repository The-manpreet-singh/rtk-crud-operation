// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const postApi = createApi({
  reducerPath: "postApi", // unique key to define where a cache is store in redux
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3600/", //fetchBaseQuery:-fetch wrapper which is automatically handles the request headers and response parsing same as axios
  }),
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
      providesTags: ["Posts"],
      // transformResponse: (response) => {
      //   console.log("data:", response);
      //   return {
      //     response,
      //   };
      // }, //this is for response
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post:", newPost);
        return {
          url: "posts", //create data
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["Posts"],
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        console.log("Update Post:", updatePostData);
        const { id, ...rest } = updatePostData;
        console.log("Actual Update Post after id destructure :", rest);
        return {
          url: `posts/${id}`, //update data
          method: "PUT",
          body: rest,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log("Delete ID:", id);
        return {
          url: `posts/${id}`, //delete data with id
          method: "DELETE",
        };
      },
      invalidatesTags: ["Posts"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllPostQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
} = postApi;
