import { configureStore } from "@reduxjs/toolkit";
import  useReducer  from './UserSlice';
import moviesReducer from './MoviesSlice'

const appStore = configureStore({
    reducer: {
        user : useReducer,
        movies: moviesReducer
    }
})

export default appStore;