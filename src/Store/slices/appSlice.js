import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        openNavbarMenu: false,
        faqsOpen: []
    },
    reducers: {
        handleOpenNavbarMenu: (state, action) => {
            state.openNavbarMenu = action.payload;
        },
        handleFaqsOpen: (state, action) => {
            const faqsIndex = state.faqsOpen.indexOf(action.payload);
            if (faqsIndex === -1) {
                state.faqsOpen.push(action.payload);
            } else {
                state.faqsOpen.splice(faqsIndex, 1);
            }
        },
        openAllFaqs: (state, action) => {
            state.faqsOpen = action.payload;
            return state;
        }
    },
});

export default appSlice.reducer;

export const {
    handleOpenNavbarMenu,
    handleFaqsOpen,
    openAllFaqs
} = appSlice.actions;