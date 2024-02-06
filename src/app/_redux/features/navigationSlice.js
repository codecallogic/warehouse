import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    view: getCookie('view') ? getCookie('view') : 'dashboard',
    popup: getCookie('popup') ? getCookie('popup') : '',
    edit: getCookie('edit') ? getCookie('edit') : ''
  }
}

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    changeView: (state, action) => {
      
      setCookie('view', action.payload);

      return {
        ...state,
        value: {
          ...state.value,
          view: action.payload
        }
      }
    },
    changePopup: (state, action) => {
      
      setCookie('popup', action.payload);
      
      return {
        ...state,
        value: {
          ...state.value,
          popup: action.payload
        }
      }
    },
    changeEdit: (state, action) => {
      
      setCookie('edit', action.payload);
      
      return {
        ...state,
        value: {
          ...state.value,
          edit: action.payload
        }
      }
    }
  }
})

export const { changeView, changePopup, changeEdit } = navigation.actions
export default navigation.reducer