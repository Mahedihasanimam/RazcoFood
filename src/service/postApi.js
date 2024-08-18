import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.10.185:5000/api/v1/" }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => `/product`,
    }),
    getProductById: builder.query({
      query: (id) => `/product/${id}`, // Dynamic endpoint with id
    }),
  }),
});

// Export hooks for the queries
export const { 
  useGetProductByNameQuery, 
  useGetProductByIdQuery 
} = postApi;
