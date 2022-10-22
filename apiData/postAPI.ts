import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postAPI = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/'
  }),
  // tagTypes: [],
  endpoints: (builder) => ({
    getList: builder.query({
      query: (offset) => ({
        url: 'posts',
        method: 'GET',
        params: { offset, limit: 20 }
      }),
    }),
    getByName: builder.query({
      query: (id: string) => `posts/${id}`,
    }),
  }),
})
export const { useGetListQuery } = postAPI
export const { useGetByNameQuery } = postAPI

