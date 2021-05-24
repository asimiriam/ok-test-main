import { combineReducers } from '@reduxjs/toolkit';
import langSlice from './langSlice';
import nextStepSlice from './nextStepSlice';

const rootSlice = combineReducers({
    nextStep: nextStepSlice.reducer,
    lang: langSlice.reducer,
});

export default rootSlice;
