import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import slabReducer from './features/slabSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    slabReducer
  },
})