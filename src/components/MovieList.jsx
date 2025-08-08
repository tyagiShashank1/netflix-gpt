import MovieCard from "./MovieCard";

const MovieList = ({ title, movieData }) => {
    return (
        <div className="px-6">
            <h1 className="text-3xl text-white py-4">{title}</h1>
            <div className="flex overflow-x-scroll">

                <div className="flex">
                    {movieData.map((item, index) => {
                        return <MovieCard key={item.id} poster={item.poster_path} />
                    })}
                </div>


            </div>
        </div>
    )
}
export default MovieList;