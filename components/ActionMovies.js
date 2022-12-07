import MovieCard from "./MovieCard"


const ActionMovies = () => {

    return (
        <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
            <h1 className="text-white text-2xl mt-8 mb-5">Action Movies</h1>
            {/* <div>
                {Array.from(actionMovies).map((movie) => {
                    <MovieCard key={movie.id} movie={movie} />
                })}
            </div> */}
        </div>
    )
}

export default ActionMovies