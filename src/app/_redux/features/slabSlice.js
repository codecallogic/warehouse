import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    material: []
  }
}

export const slab = createSlice({
  name: 'auth',
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
    }
  }
})

export const { changeSlabArray } = slab.actions
export default slab.reducer