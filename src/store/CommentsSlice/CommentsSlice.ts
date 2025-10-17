import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CommentList {
    commentList: Comment[] | null,
    favorites: Comment[] | null,
}

export interface Comment {
    id: number,
    name: string,
    email: string,
    body: string,
    isFav: boolean,
}

const initialState: CommentList = {
    favorites: [],
    commentList: null
}

export const CommentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {
        setComments: (state, action: PayloadAction<Comment[]>) => {
            state.commentList = action.payload;
        },
        addComment: (state, action: PayloadAction<Comment>) => {
            state.commentList = [...state.commentList!, action.payload]
        },
        editComment: (state, action: PayloadAction<Comment>) => {
            state.commentList = state.commentList!.map((book) => {
                return book.id === action.payload.id ? action.payload : book;
            })
        },
        toggleFavorite: (state, action: PayloadAction<Comment>) => {
            state.commentList = state.commentList!.map((book) => {
                return book.id === action.payload.id ? {...book, isFav: !book.isFav} : book;
            }),
            state.favorites = state.favorites?.find((book) => book.id === action.payload.id) ? state.favorites!.filter((book) => book.id !== action.payload.id) : [...state.favorites!, action.payload]
        }
    }
});

export const { setComments, addComment, editComment, toggleFavorite } = CommentsSlice.actions;
export default CommentsSlice.reducer;