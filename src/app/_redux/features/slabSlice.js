import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    material: [],
    color: [],
    supplier: [],
    grade: [],
    finish: [],
    quantity: '',
    size_1: ''
  }
}

export const slab = createSlice({
  name: 'slab',
  initialState,
  reducers: {
    changeSlabArray: (state, action) => {

      const { item, type } = action.payload;
      
      let array = []
      array.push(item)
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: array
        }
      }
    },
    changeSlabValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    }
  }
})

export const { changeSlabArray, changeSlabValue } = slab.actions
export default slab.reducer