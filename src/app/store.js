import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "../features/adminSlice";
import { productApi } from "../features/productSlice";
// authReducer,
export const store = configureStore({
  reducer: {
    // authSlice: authReducer,
    [adminApi.reducerPath]: adminApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adminApi.middleware)
      .concat(adminApi.middleware),
  devTools: true,
});
