import { createSlice } from "@reduxjs/toolkit";

import data from '../data/language.json';

const languageSlice = createSlice({
    name: 'language',
    initialState: data.en,

});

export default languageSlice.reducer;