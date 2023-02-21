import { getTrendingMovies } from '../../services/TheMovieDB'
import { useEffect, useState } from 'react'

const TrendingMovies = (props) => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    getTrendingMovies().then((result) => {
      setMovies(result)
    })
  }, [])

  return (
    <>
      <p className="title">On Trending</p>
      <div className="container mx-auto flex flex-wrap justify-between">
        {movies.map((movie) => {
          return (
            <div
              className="w-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 p-2 cursor-pointer overflow-hidden hover:scale-110 hover:duration-300 hover:z-40 group relative"
              key={movie.id}
              onClick={() => {
                props.detailMovie(movie)
              }}
            >
              <img
                src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
                alt={movie.title}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute text-white bottom-0 right-0 left-0 h-[80%] rounded-lg p-3 m-2 bg-gradient-to-t from-black to-hitam-card opacity-80 overflow-hidden translate-y-72 group-hover:-translate-y-0 group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                <h4 className="truncate font-semibold text-lg">
                  {movie.title}
                </h4>
                <p className="my-1 text-xs">{movie.release_date}</p>
                <p className="text-xs max-h-24 overflow-hidden">
                  {movie.overview}
                </p>
                <p>...</p>
                <button className="bg-red-600 pb-2 text-xs px-2 py-1 mt-2 font-semibold rounded-md">
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default TrendingMovies
