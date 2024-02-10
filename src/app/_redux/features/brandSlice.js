import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: ''
  }
}

export const brand = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    changeBrandValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editBrand: (state, action) => {

      const { id, items } = action.payload;

      let foundBrand         = items.find(brand => brand.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundBrand
        }
      }
      
    },
    resetBrand: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeBrandValue, editBrand, resetBrand } = brand.actions
export default brand.reducer