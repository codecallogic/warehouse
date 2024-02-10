import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: ''
  }
}

export const location = createSlice({
  name: 'location',
  initialState,
  reducers: {
    changeLocationValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editLocation: (state, action) => {

      const { id, items } = action.payload;

      let foundLocation         = items.find(location => location.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundLocation
        }
      }
      
    },
    resetLocation: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeLocationValue, editLocation, resetLocation } = location.actions
export default location.reducer