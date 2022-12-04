import {configureStore, createSlice} from "@reduxjs/toolkit";

interface AppState {
    isCategoryModalOpen: boolean
}

const initialState: AppState = {
    isCategoryModalOpen: false
}

const appStateSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        openCategoryModal: (state) => {
            state.isCategoryModalOpen = true;
        },
        closeCategoryModal: (state) => {
            state.isCategoryModalOpen = false;
        }
    }
});

export const store = configureStore({
    reducer: {
        [appStateSlice.name]: appStateSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export const { openCategoryModal, closeCategoryModal } = appStateSlice.actions
