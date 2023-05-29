import  {weatherApiSlice}  from './rtk-query/api-slices/weather-api-slice/weatherApiSlice'
import { usersApiSlice } from './rtk-query/api-slices/users-ap-slice/UsersApiSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
  [usersApiSlice.reducerPath]: usersApiSlice.reducer,
});

export default configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(weatherApiSlice.middleware, usersApiSlice.middleware)
})