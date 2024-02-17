import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  value: {
    name: ''
  }
}

export const model = createSlice({
  name: 'model',
  initialState,
  reducers: {
    changeModelValue: (state, action) => {
      
      const { value, type } = action.payload;
      
      return {
        ...state,
        value: {
          ...state.value,
          [type]: value
        }
      }
    },
    editModel: (state, action) => {

      const { id, items } = action.payload;

      let foundModel         = items.find(model => model.id === id)

      return {
        ...state,
        value: {
          ...state.value,
          ...foundModel
        }
      }
      
    },
    resetModel: () => {
      return {
        ...initialState
      }
    }
  }
})

export const { changeModelValue, editModel, resetModel } = model.actions
export default model.reducer