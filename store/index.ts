import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import { articleApi } from "./article/article.service";

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware, logger),
})

export type RootState = ReturnType<typeof store.getState>