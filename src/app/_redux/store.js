import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/authSlice'
import navigationReducer from './features/navigationSlice'
import slabReducer from './features/slabSlice'
import productReducer from './features/productSlice'
import remnantReducer from './features/remnantSlice'
import materialReducer from './features/materialSlice'
import colorReducer from './features/colorSlice'
import locationReducer from './features/locationSlice'
import brandReducer from './features/brandSlice'
import categoryReducer from './features/categorySlice'
import modelReducer from './features/modelSlice'

export const store = configureStore({
  reducer: {
    authReducer,
    navigationReducer,
    slabReducer,
    productReducer,
    remnantReducer,
    materialReducer,
    colorReducer,
    locationReducer,
    brandReducer,
    categoryReducer,
    modelReducer
  },
})