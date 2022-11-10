import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { Posts } from '../types/posts';

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["Posts"],
    endpoints: (builder) => ({
        getSwiperPosts: builder.query<Posts, void>({
            query: () => `posts?limit=10`,
            providesTags: [{ type: "Posts", id: "SWIPER_POSTS_LIST" }],
        })
    }),
})

export const {
    useGetSwiperPostsQuery
  } = postsApi;
    