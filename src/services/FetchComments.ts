import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentApi = createApi({
    reducerPath: "commentAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/posts/1/comments" }),
    endpoints: (builder) => ({
        getComments: builder.query({
            query: (e) => ``,
        }),
    })
});

export const { useGetCommentsQuery } = commentApi;