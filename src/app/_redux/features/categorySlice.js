import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: ''
  }
}

export const category = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeCategoryValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editCategory: (state, action) => {

      const { id, items } = action.payload;

      let foundCategory         = items.find(category => category.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundCategory
        }
      }
      
    },
    resetCategory: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeCategoryValue, editCategory, resetCategory } = category.actions
export default category.reducer