import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const adminApi = createApi({
  reducerPath: "adminApi",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/` }),
  tagTypes: ["Admin"],
  endpoints: (builder) => ({
    getAllAdmins: builder.query({
      query: () => `getAllAdmins/`,
      providesTags: ["Admin"],
    }),
    loginAdmin: builder.query({
      query: (payload) => {
        // debugger
        return {
          url: `adminLogin/`,
          method: "POST",
          body: payload,
          transformResponse: (response, meta, arg) => {
            // debugger
            return response.data;
          },
          transformErrorResponse: (response, meta, arg) => {
            // debugger
            return response.status;
          },
        };
      },
      providesTags: ["Admin"],
    }),
  }),
});
export const { useGetAllAdminsQuery, useLazyLoginAdminQuery } = adminApi;
