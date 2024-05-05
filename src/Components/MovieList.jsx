import React, { useRef } from 'react';
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const MovieList = ({ title, movies }) => {
    const sliderRef = useRef(null);
    const slideLeft = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft -= 500;
        }
      };
    
      const slideRight = () => {
        if (sliderRef.current) {
          sliderRef.current.scrollLeft += 500;
        }
      };
    
  return (
    <div className="px-6 ">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className='relative flex items-center'>
      <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 bg-white' onClick={slideLeft} size={40} />
      <div
      ref={sliderRef}
      className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
    >
    {movies?.map((movie) => (
        <MovieCard key={movie.id} posterPath={movie.poster_path} />
      ))}
    </div>
    <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 bg-white' onClick={slideRight} size={40} />
      </div>
    </div>
  );
};
export default MovieList;