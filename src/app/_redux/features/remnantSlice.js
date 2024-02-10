import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    material: [],
    color: [],
    name: '',
    shape: '',
    l1: '',
    w1: '',
    l2: '',
    w2: '',
    notes: '',
    lot: '',
    bundle: '',
    supplierRef: '',
    bin: '',
    qrCode: '',
    images: [],
  }
}

export const remnant = createSlice({
  name: 'remnant',
  initialState,
  reducers: {
    changeRemnantArray: (state, action) => {

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
    changeRemnantValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    changeRemnantImages: (state, action) => {

      const { item, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: [...item]
        }
      }
    },
    editRemnant: (state, action) => {

      const { id, items } = action.payload;

      let foundRemnant         = items.find(remnant => remnant.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundRemnant
        }
      }
      
    },
    resetRemnant: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeRemnantArray, changeRemnantValue, changeRemnantImages, editRemnant, resetRemnant } = remnant.actions
export default remnant.reducer