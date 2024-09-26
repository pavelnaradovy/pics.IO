import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./redusers/commentSlice";

export const store = configureStore({
  reducer: { commentSlice },
});
