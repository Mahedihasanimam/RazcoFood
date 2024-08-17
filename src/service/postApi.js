import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://192.168.10.185:5000/api/v1/" }),
  endpoints: (builder) => ({
    getProductByName: builder.query({
      query: () => `/product`,
    }),
  }),
});

export const { useGetProductByNameQuery } = postApi;
