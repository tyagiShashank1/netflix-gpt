import { useEffect } from "react"
import { API_OPTIONS } from "../Utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../Utils/moviesSlice";

const useUpcomingMovies = () =>{

    const dispatch = useDispatch();
     const upcomingMovies = useSelector(function(appStore){
        return appStore.movies.upcomingMovies;
    })

    useEffect(()=>{
       if(!upcomingMovies) fetchUpcomingMovies();
    },[])

    const fetchUpcomingMovies = async () =>{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;