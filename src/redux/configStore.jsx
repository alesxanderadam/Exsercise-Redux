import { configureStore } from "@reduxjs/toolkit";
import { arrBurger } from "./reducer/buggerState";
export const store = configureStore({
    reducer: {
        buggerState: arrBurger,
    }
})