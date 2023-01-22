import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'

import { slice } from './slices/good';
export * from './slices/good';


export const store = configureStore({
  reducer: {
      goods: slice.reducer
  },
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 