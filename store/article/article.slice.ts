import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IInitialState {
    url: string;
    summary: string;
}

const initialState:IInitialState = {
    url: "",
    summary: ""
}

function createReducers() {
    return {
        setSummary
    };

    function setSummary(state: IInitialState, action: PayloadAction<string>) {
        state.summary = action.payload || "";
    }
}

const slice = createSlice({
    name: 'article',
    initialState,
    reducers: createReducers()
});

// exports
export const articleActions = { 
    ...slice.actions };
export const articleReducer = slice.reducer;