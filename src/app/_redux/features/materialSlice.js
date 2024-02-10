import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: '',
    description: ''
  }
}

export const material = createSlice({
  name: 'material',
  initialState,
  reducers: {
    changeMaterialValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editMaterial: (state, action) => {

      const { id, items } = action.payload;

      let foundMaterial         = items.find(material => material.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundMaterial
        }
      }
      
    },
    resetMaterial: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeMaterialValue, editMaterial, resetMaterial } = material.actions
export default material.reducer