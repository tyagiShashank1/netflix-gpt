import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies } from "../Utils/moviesSlice";
import { useDispatch } from "react-redux";

const useNowPlayingMovies = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();

    // return function(){
    //     dispatch(removeNowPlayingMovies());
    // }
  }, []);

  //Now Playing movies API call
};

export default useNowPlayingMovies;
