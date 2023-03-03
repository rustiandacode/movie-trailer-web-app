import { AiFillStar } from 'react-icons/ai'
import posterBroken from '../../poster-broken.png'

import { useState, useEffect } from 'react'

const Discover = (props) => {
  const [genreFilter, setGenreFilter] = useState()
  const [movies, setMovies] = useState(props.discoverMovie)
  const genres = props.allGenres

  const movieByGenre = props.discoverMovie.filter(
    (movie) =>
      movie.genre_ids[0] === genreFilter ||
      movie.genre_ids[1] === genreFilter ||
      movie.genre_ids[2] === genreFilter ||
      movie.genre_ids[3] === genreFilter ||
      movie.genre_ids[4] === genreFilter,
  )

  useEffect(() => {
    setGenreFilter(props.genreSelected)
  }, [props.genreSelected])

  useEffect(() => {
    setMovies(movieByGenre)
  }, [movieByGenre])

  return (
    <div className="md:my-10 md:px-10 px-5">
      <div className="container mx-auto flex gap-2 flex-wrap justify-center pt-5">
        {genres.map((genre) => {
          return (
            <div
              className={`${
                genreFilter === genre.id
                  ? 'border-white text-hitam-content bg-white'
                  : 'border-slate-400'
              } mr-1 px-2 py-1 rounded-xl cursor-pointer  border-[2px] hover:border-white hover:text-hitam-content hover:bg-white`}
              key={genre.id}
              onClick={() => {
                setGenreFilter(genre.id)
                setMovies(movieByGenre)
              }}
            >
              {genre.name}
            </div>
          )
        })}
      </div>
      <p className="title">Discover</p>
      <div className="container mx-auto flex flex-wrap justify-center">
        {movies.map((movie) => {
          const imageBroken = () => {
            if (movie.poster_path) {
              return `${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`
            } else {
              return posterBroken
            }
          }
          return (
            <div
              className="w-1/2 lg:w-1/5 md:w-1/4 sm:w-1/3 p-2 cursor-pointer overflow-hidden hover:scale-110 hover:duration-300 hover:z-40 group relative"
              key={movie.id}
              onClick={() => {
                props.detailMovie(movie)
                props.dicoverUndefined(undefined)
              }}
            >
              <div className="absolute right-3 p-2 flex gap-1 items-center">
                <AiFillStar className="text-yellow-500 shadow-lg" />
                <span className="text-white">{movie.vote_average}</span>
              </div>
              <img
                src={imageBroken()}
                alt={movie.title}
                className="rounded-lg shadow-xl"
              />
              <div className="absolute text-white bottom-0 right-0 left-0 h-[80%] rounded-lg p-3 m-2 bg-gradient-to-t from-black to-hitam-card opacity-80 overflow-hidden translate-y-72 group-hover:-translate-y-0 group-hover:block group-hover:transition group-hover:duration-300 group-hover:ease-in-out">
                <h4 className="truncate font-semibold md:text-lg text-md">
                  {movie.title}
                </h4>
                <p className="my-1 text-xs">{movie.release_date}</p>
                <p className="text-xs max-h-24 overflow-hidden">
                  {movie.overview}
                </p>
                <p>...</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Discover
