import useVideoTrailer from "../hooks/useVideoTrailer";
const VideoBackground = ({ movieId }) => {


    const trailerKey = useVideoTrailer(movieId);

    return (
        <div className="">
            <iframe className="w-screen aspect-video" src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground;