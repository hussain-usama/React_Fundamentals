import { configureStore } from '@reduxjs/toolkit'
import ApiSlice from './Reducers/ApiSlice'
import LoginSlice from './Reducers/LoginSlice'

export const store = configureStore({
  reducer: {
    ApiSlice: ApiSlice,
    LoginSlice: LoginSlice,
  },
})