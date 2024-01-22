import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigation'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer
  },
})