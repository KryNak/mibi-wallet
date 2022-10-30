import {configureStore, createSlice} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "",
    baseQuery: fetchBaseQuery({
        baseUrl: ``,
        prepareHeaders: (headers) => {
            return headers
        }
    }),
    endpoints: (builder) => ({

    })
})

interface AppState {
    user: {
        accessToken: string | null,
        refreshToken: string | null
    }
}

const initialState: AppState = {
    user: {
        accessToken: null,
        refreshToken: null
    }
}

const appStateSlice = createSlice({
    name: "appState",
    initialState,
    reducers: {

    }
});

export const store = configureStore({
    reducer: {
        [appStateSlice.name]: appStateSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
