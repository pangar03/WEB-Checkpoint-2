import { configureStore } from "@reduxjs/toolkit";
import CommentReducer from "./CommentsSlice/CommentsSlice"
import { commentApi } from "../services/FetchComments";

export const store = configureStore({
    reducer: {
        comments: CommentReducer,
        [commentApi.reducerPath]: commentApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(commentApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;