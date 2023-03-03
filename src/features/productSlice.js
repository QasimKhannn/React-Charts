import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/` }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `getAllProducts/`,
      providesTags: ["Product"],
    }),
    getOneProduct: builder.query({
      query: (id) => `getOneProduct/${id}`,
    }),
    addProduct: builder.mutation({
      query: (payload) => {
        // debugger
        return {
          url: `addProduct/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            return response.status;
          },
          invalidatesTags: ["Product"],
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `deleteProduct/${id}`,
        method: "DELETE",
        transformResponse: (response, meta, arg) => {
          return response.data;
        },
        transformErrorResponse: (response, meta, arg) => {
          return response.status;
        },
        invalidatesTags: ["Product"],
      }),
    }),
    updateProduct: builder.mutation({
      query: ({ id, payload }) => ({
        url: `/updateProduct/${id}`,
        method: "PUT",
        body: payload,
      }),
      transformResponse: (response, meta, arg) => {
        return response.data;
      },
      transformErrorResponse: (response, meta, arg) => {
        return response.status;
      },
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useGetAllProductsQuery,
  useGetOneProductQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
} = productApi;
