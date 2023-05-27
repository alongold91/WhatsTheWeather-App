import  {weatherApiSlice}  from './rtk-query/api-slices/weather-api-slice/weatherApiSlice'
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApiSlice.middleware)
})