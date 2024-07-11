import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../app/features/Counter/Counterslice"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
    }
})