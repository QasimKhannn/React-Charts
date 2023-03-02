import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "../features/adminSlice";
// authReducer,
export const store = configureStore({
  reducer: {
    // authSlice: authReducer,
    [adminApi.reducerPath]: adminApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
  devTools: true,
});
