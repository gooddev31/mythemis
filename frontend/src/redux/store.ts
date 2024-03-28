// store.ts
import { configureStore } from '@reduxjs/toolkit';
import activeComponentReducer from './slice/activeComponentSlice';

const store = configureStore({
  reducer: {
    activeComponent: activeComponentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
