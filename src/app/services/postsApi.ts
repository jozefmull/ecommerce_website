import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { Posts, Post, Comments } from '../types/posts';

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getSwiperPosts: builder.query<Posts, void>({
            query: () => `posts?limit=10`,
            providesTags: [{ type: "Posts", id: "SWIPER_POSTS_LIST" }],
        }),
        getAllPosts: builder.query<Posts, void>({
            query: () => `posts?limit=15`,
            providesTags: [{ type: "Posts", id: "POSTS_LIST" }],
        }),
        getPostDetails: builder.query<Post, {postId: string | undefined}>({
            query: ({postId}) => `posts/${postId}`,
            providesTags: [{ type: "Posts", id: "POST_DETAILS" }],
        }),
        getPostComments: builder.query<Comments, {postId: string | undefined}>({
            query: ({postId}) => `posts/${postId}/comments`,
            providesTags: [{ type: "Posts", id: "POST_COMMENTS" }],
        }),
        loadMorePosts: builder.query<Posts, {skip: number | undefined}>({
            query: ({skip}) => `posts?limit=15&skip=${skip}`,
            providesTags: [{ type: "Posts", id: "LOAD_MORE_POSTS" }],
        })
    }),
})

export const {
    useGetSwiperPostsQuery,
    useGetAllPostsQuery,
    useGetPostDetailsQuery,
    useGetPostCommentsQuery,
    useLoadMorePostsQuery
  } = postsApi;
    