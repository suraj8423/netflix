import { IMG_CDN_URL } from "../Utils/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};
export default MovieCard;