import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: ''
  }
}

export const color = createSlice({
  name: 'color',
  initialState,
  reducers: {
    changeColorValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editColor: (state, action) => {

      const { id, items } = action.payload;

      let foundColor         = items.find(color => color.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundColor
        }
      }
      
    },
    resetColor: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeColorValue, editColor, resetColor } = color.actions
export default color.reducer