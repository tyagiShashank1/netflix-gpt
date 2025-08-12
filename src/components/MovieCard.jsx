import { MOVIE_IMG_CDN_URL } from "../Utils/constants";
const MovieCard = ({poster}) =>{
    if(!poster) return null;
    return (
        <div className="w-36 md:w-48 pr-4">
           <img src={`${MOVIE_IMG_CDN_URL}${poster}`} alt="Movie card" />
        </div>
    )
}

export default MovieCard;