import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

import { User } from '../types/users';

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getPostUser: builder.query<User, {userId: string}>({
            query: ({userId}) => `/users/${userId}`,
            providesTags: [{ type: "Users", id: "POST_USER" }],
        })
    }),
})

export const {
    useGetPostUserQuery
  } = userApi;
    