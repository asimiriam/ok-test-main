import { configureStore } from '@reduxjs/toolkit';
import rootSlice from './components/slice';

const store = configureStore({
    reducer: rootSlice,
});

export default store;