import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import slabReducer from './features/slabSlice'
import productReducer from './features/productSlice'
import remnantReducer from './features/remnantSlice'
import materialReducer from './features/materialSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    slabReducer,
    productReducer,
    remnantReducer,
    materialReducer
  },
})