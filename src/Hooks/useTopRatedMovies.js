import React from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../Utils/MoviesSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results))
  }

  React.useEffect(()=> {
    getTopRatedMovies();
  })
}

export default useTopRatedMovies;

