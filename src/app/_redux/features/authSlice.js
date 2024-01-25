import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getCookie, deleteCookie } from 'cookies-next';

const initialState = {
  value: {
    loggedIn: getCookie('user') ? true : false
  }
}

export const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      return {
        value: {
          loggedIn: true
        }
      }
    },
    logout: (state, action) => {

      deleteCookie('user')
      deleteCookie('token')
      
      return {
        value: {
          loggedIn: false
        }
      }
    }
  }
})

export const { login, logout } = auth.actions
export default auth.reducer