import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { REACT_APP_BACKEND_URL } from "@env";

interface LoginRequest {
    username: string,
    password: string
}

interface LoginResponse {
    accessToken: string
    refreshToken: string
}

export const api = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: `${REACT_APP_BACKEND_URL}/api`,
        prepareHeaders: (headers) => {
            return headers
        }
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: "/login",
                method: "POST",
                body: credentials
            }),
            async onQueryStarted(arg: LoginRequest, {dispatch, queryFulfilled}) {
                try {

                    const { data } = await queryFulfilled;
                    dispatch(setUserTokens(data))

                } catch (err) {

                    if(err.status === 401) {
                        dispatch(purgeUserTokens)
                    }

                }
            }
        })
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
        setUserTokens: (state: AppState, payload: PayloadAction<LoginResponse>) => {
            state.user = payload.payload
        },
        purgeUserTokens: (state: AppState) => {
            state.user = {accessToken: null, refreshToken: null}
        }
    }
});

export const store = configureStore({
    reducer: {
        [appStateSlice.name]: appStateSlice.reducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export const { useLoginMutation } = api
export const { setUserTokens, purgeUserTokens } = appStateSlice.actions
export type RootState = ReturnType<typeof store.getState>
