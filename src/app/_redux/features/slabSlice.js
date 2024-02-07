import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    priceSlab: '',
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
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    editSlab: (state, action) => {

      const { id, items } = action.payload;

      let foundSlab         = items.find(slab => slab.id === id)

      let grade             = []
      if(foundSlab.grade) grade.push({ name: foundSlab.grade })
      let finish            = []
      if(foundSlab.finish) finish.push({ name: foundSlab.finish })

      return {
        ...state,
        value: {
          ...state.value,
          ...foundSlab,
          grade: grade,
          finish: finish
        }
      }
      
    },
    resetSlab: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeSlabArray, changeSlabValue, changeSlabImages, editSlab, resetSlab } = slab.actions
export default slab.reducer