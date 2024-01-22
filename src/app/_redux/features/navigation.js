import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, setCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    view: getCookie('view') ? getCookie('view') : 'dashboard',
    popup: getCookie('popup') ? getCookie('popup') : ''
  }
}

export const navigation = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    changeView: (state, action) => {
      console.log(action)
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
      console.log('POPUP', action)
      setCookie('popup', action.payload);
      
      return {
        ...state,
        value: {
          ...state.value,
          popup: action.payload
        }
      }
    }
  }
})

export const { changeView, changePopup } = navigation.actions
export default navigation.reducer