import React from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../Utils/MoviesSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results))
  }

  React.useEffect(()=> {
    getUpcomingMovies();
  })
}

export default useUpcomingMovies;

