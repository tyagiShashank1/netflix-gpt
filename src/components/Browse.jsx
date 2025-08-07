import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {


    //Making an API call for getting movies and storing in our app
    useNowPlayingMovies();


    return (
        <div>
            <Header />
            {/**
             Main Container
             
                - Video Conatiner
                - Video Title
            Second Container
                - Mobie Lists * N
                    - Cards * N
             */}
             <MainContainer/>
             <SecondaryContainer/>
        </div>
    )
}
export default Browse;