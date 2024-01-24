import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    material: [],
    color: [],
    supplier: [],
    grade: [],
    finish: [],
    location: [],
    quantity: '',
    sizeOne: '',
    sizeTwo: '',
    thickness: '',
    slabPrice: '',
    priceSqft: '',
    block: '',
    orderedStatus: '',
    receivedStatus: '',
    deliveredStatus: '',
    lotNumber: '',
    qrCode: '',
    images: []
  }
}

export const slab = createSlice({
  name: 'slab',
  initialState,
  reducers: {
    changeSlabArray: (state, action) => {
      console.log(action.payload)
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
    },
    changeSlabImages: (state, action) => {

      const { item, type } = action.payload;
      
      console.log(item)
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    }
  }
})

export const { changeSlabArray, changeSlabValue, changeSlabImages } = slab.actions
export default slab.reducer