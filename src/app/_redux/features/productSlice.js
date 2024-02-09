import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    brand: [],
    model: [],
    category: [],
    color: [],
    location: [],
    quantity: '',
    qrCode: '',
    description: '',
    price: '',
    images: [],
  }
}

export const product = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeProductArray: (state, action) => {

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
    changeProductValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    changeProductImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    editProduct: (state, action) => {

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
    resetProduct: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeProductArray, changeProductValue, changeProductImages, editProduct, resetProduct } = product.actions
export default product.reducer