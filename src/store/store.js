import { configureStore } from "@reduxjs/toolkit";
import reducerOne from "./SliceOne";

export const store = configureStore({
   reducer: reducerOne
})