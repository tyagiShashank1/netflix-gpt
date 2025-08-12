import { useSelector } from "react-redux";
import MovieList from './MovieList'
import Shimmer from "./Shimmer";

const GptMovieSuggestions = () => {
    const movies = useSelector(function (appStore) {
        return appStore.movies;
    });
    const { movieResults, movieNames } = movies;
    if (!movieNames || !movieResults) return <Shimmer />;


    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
            <div>

                {movieNames.map((movieName,index) => {
                    return <MovieList key={movieName} title={movieName} movieData={movieResults[index]} />
                })}
            </div>
        </div>
    )
}
export default GptMovieSuggestions;