import { useSelector } from "react-redux";
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {

    const movies = useSelector(function (appStore) {
        return appStore.movies?.nowPlayingMovies;
    });

    if (!movies) return; //early return

    const mainMovie = movies[0];

    const { id, original_title, overview } = mainMovie;

    return (
        <div>
            <VideoTitle original_title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;