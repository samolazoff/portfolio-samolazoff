import { configureStore } from '@reduxjs/toolkit';

import languageReducer from '../slices/languageSlice.js'

export default configureStore({
    reducer: {
      language: languageReducer,
    },
});