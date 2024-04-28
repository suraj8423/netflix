import React from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../Utils/MoviesSlice';
import { API_OPTIONS } from '../Utils/Constants';

const useNowPlayingMoview = () => {
    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }

  React.useEffect(()=> {
    getNowPlayingMovies();
  })
}

export default useNowPlayingMoview;

