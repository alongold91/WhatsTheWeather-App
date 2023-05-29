import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const usersApiSlice = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080' }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (name) => ``,
    }),
  }),
})

export const { useGetUsersQuery } = usersApiSlice;