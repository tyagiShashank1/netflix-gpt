import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constants"
import { addTrailer } from "../Utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";


const useVideoTrailer = (movieId) =>{
    const dispatch = useDispatch();
     const trailer = useSelector(function(appStore){
        return appStore.movies.trailer;
    })
    const trailerKey = useSelector(function(appStore){
        return appStore.movies?.trailer?.key;
    })
    useEffect(() => {
       if(!trailer) movieVideo();
    }, [])

    //fetch movie trailer video
    const movieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filterData = json.results.filter(function (item, index) { return item.type === 'Trailer'; });
        const trailer = filterData.length ? filterData[0] : json.results[0];
        dispatch(addTrailer(trailer));
    }



return trailerKey;

}

export default useVideoTrailer;