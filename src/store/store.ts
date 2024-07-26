import { configureStore } from "@reduxjs/toolkit";
import { chineseFoodApi } from "./Recipeapi";

const store=configureStore({
    reducer:{
         [chineseFoodApi.reducerPath]:chineseFoodApi.reducer,
    },
    middleware:(defaultMiddleware)=>
        defaultMiddleware().concat(chineseFoodApi.middleware)
})

export default store
