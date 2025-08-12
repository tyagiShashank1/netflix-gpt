import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../Utils/moviesSlice";

const useTrendingMovies = () =>{

    const dispatch = useDispatch();
     const trendingMovies = useSelector(function(appStore){
        return appStore.movies.trendingMovies;
    })
    useEffect(()=>{
      if(!trendingMovies)  fetchTrendingMovies();
    },[])

    const fetchTrendingMovies = async () =>{
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingMovies(json.results));
    }
}

export default useTrendingMovies;