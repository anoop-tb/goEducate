import { configureStore } from "@reduxjs/toolkit";
import tableDataReducer from "./features/data-slice";

export const store = configureStore({
  reducer: {
    table: tableDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;