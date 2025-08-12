import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import usePopularMovies from "../hooks/usePopularMobvies";

const SecondaryContainer = () => {
    const nowPlayingmovies = useSelector(function (appStore) {
        return appStore.movies.nowPlayingMovies;
    })
    const popularMovies = useSelector(function (appStore) {
        return appStore.movies.popularMovies;
    })

    const trendingMovies = useSelector(function (appStore) {
        return appStore.movies.trendingMovies;
    })

    const upcomingMovies = useSelector(function (appStore) {
        return appStore.movies.upcomingMovies;
    })

    if (!nowPlayingmovies || !popularMovies || !trendingMovies || !upcomingMovies) return;



    return (
        <div className="bg-black">
            {/**
           Movie List - Popular
           Movie List - Now Playing
           Movie List - Trending
           Movie List - Horror
        
           */}
            <div className=" mt-0 md:mt-52 pl-4 md:pl-12 relative z-20">
                <MovieList title={"Now Playing"} movieData={nowPlayingmovies} />
                <MovieList title={"Trending"} movieData={trendingMovies} />
                <MovieList title={"Popular"} movieData={popularMovies} />
                <MovieList title={"Upcoming Movies"} movieData={upcomingMovies} />
                <MovieList title={"Horror Movies"} movieData={nowPlayingmovies} />
            </div>

        </div>
    )
}

export default SecondaryContainer;