import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import slabReducer from './features/slabSlice'
import productReducer from './features/productSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    slabReducer,
    productReducer
  },
})