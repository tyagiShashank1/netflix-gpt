import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMobvies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {

    const showGptSearch = useSelector(function (appStore) {
        return appStore.gpt.showGptSearch;
    })

    //Making an API call for getting movies and storing in our app
    useNowPlayingMovies();
    usePopularMovies();
    useTrendingMovies();
    useUpcomingMovies();


    return (
        <div>
            <Header />
            {showGptSearch ? (<GptSearch />) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>)}

            {/**
             Main Container
             
                - Video Conatiner
                - Video Title
            Second Container
                - Mobie Lists * N
                    - Cards * N
             */}

        </div>
    )
}
export default Browse;