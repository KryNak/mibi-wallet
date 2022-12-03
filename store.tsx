import {configureStore, createSlice} from "@reduxjs/toolkit";

interface AppState {

}

const initialState: AppState = {

}

const appStateSlice = createSlice({
    name: "app",
    initialState,
    reducers: {

    }
});

export const store = configureStore({
    reducer: {
        [appStateSlice.name]: appStateSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
