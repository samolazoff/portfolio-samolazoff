import { createSlice } from "@reduxjs/toolkit";

import data from '../data/language.json';

const initialState = {
    dataLanguage: data.en
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        isRU: (state) => {
            state.dataLanguage = data.ru;
        },
        isEN: (state) => {
            state.dataLanguage  = data.en;
        }
    }
});

export const {isRU, isEN} = languageSlice.actions;
export default languageSlice.reducer;