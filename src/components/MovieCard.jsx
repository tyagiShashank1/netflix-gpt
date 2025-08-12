import { MOVIE_IMG_CDN_URL } from "../Utils/constants";
import MovieDescription from "./MovieDescription";
import { useState } from "react";
const MovieCard = ({ poster, movie }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    if (!poster) return null;
    return (
        <div className="w-36 md:w-48 pr-4 hover:cursor-pointer">
            <img onClick={() => setIsModalOpen(true)} src={`${MOVIE_IMG_CDN_URL}${poster}`} alt="Movie card" />

            <MovieDescription
                movie={movie}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default MovieCard;