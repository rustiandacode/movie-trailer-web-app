import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

import { searchMovie } from '../../services/TheMovieDB'
import { useState } from 'react'

import backdropBroken from '../../backdrop-broken.png'

const Navbar = (props) => {
  const [movies, setMovies] = useState([])
  const [fiveMovie, setFiveMovie] = useState([])
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const search = async (q) => {
    setQuery(q)
    if (q.length > 3) {
      const query = await searchMovie(1, q)
      setMovies(query.results)

      // show only 5 move for result bar
      const onlyFiveMovie = movies.splice(0, 5)
      setFiveMovie(onlyFiveMovie)
    }
  }

  return (
    <div className="container mx-auto  flex items-center justify-between gap-10 md:px-10 md:pt-10 px-5 pt-5">
      <div className=" lg:hidden mt-2 cursor-pointer">
        <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
        <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
        <div className="bg-slate-400 h-1 rounded-lg w-8 mb-[8px]"></div>
      </div>
      <h2 className="text-white text-2xl text-center font-bold cursor-pointer block md:hidden">
        RUSTIANDA <span className="text-red-600">MOVIES</span>
      </h2>
      <div className="lg:ml-32 md:flex hidden gap-2 md:px-5 px-0 p-1 justify-center items-center lg:w-1/2 w-full shadow rounded-lg relative">
        <FaSearch className="text-2xl" />
        <input
          className="mx-2 py-2 text-md w-full px-3 bg-transparent outline-none hidden md:block"
          type="text"
          placeholder="search any movies..."
          onChange={({ target }) => search(target.value)}
        />
        <div
          className={`${
            query.length > 3 ? 'block' : 'hidden'
          } bg-hitam-content shadow rounded-b-lg p-3 absolute w-full top-[110%] z-[99]`}
        >
          {fiveMovie.map((movie) => {
            const imageBroken = () => {
              if (movie.backdrop_path) {
                return `${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`
              } else {
                return backdropBroken
              }
            }
            return (
              <div
                className="flex items-center gap-5 mb-4 cursor-pointer"
                key={movie.id}
                onClick={() => {
                  props.detailMovie(movie)
                  setMovies([])
                  setQuery('')
                }}
              >
                <img
                  src={imageBroken()}
                  alt={movie.title}
                  className="w-28 rounded-md"
                />
                <p className="p-3 text-xl truncate">{movie.title}</p>
              </div>
            )
          })}

          <div
            className=" group"
            onClick={() => {
              props.movieResults(movies)
              props.keywordMovies(query)
              props.dicoverUndefined('')
              props.detailUndefined(undefined)

              setQuery('')
            }}
          >
            <p
              className={`${
                movies.length < 4 ? 'hidden' : 'block'
              } text-center group-hover:text-white p-2 rounded-lg bg-hitam-card cursor-pointer`}
            >
              see more results...
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-3">
        <button className=" text-sm px-2 py-1 rounded-md text-white hover:text-red-600 hover:font-semibold">
          Register
        </button>
        <button className=" text-sm bg-red-600 px-2 py-1 rounded-md border border-red-600 text-white hover:opacity-80">
          Login
        </button>
      </div>
      <FaSearch
        className="text-3xl md:hidden cursor-pointer"
        onClick={() => setShowSearch(true)}
      />

      {/* search feature on screen mobile */}

      <div
        className={`${
          showSearch ? 'block' : 'hidden'
        }  absolute left-0 top-0 bottom-0 w-full z-[999] bg-hitam-content px-10`}
      >
        <div className="flex gap-2 p-4 mt-10 justify-center items-center bg-hitam-content lg:w-1/2 mx-auto w-full shadow rounded-lg relative">
          <FaSearch className="text-2xl" />
          <input
            className="mx-2 py-2 text-sm w-full px-3 md:text-lg bg-hitam-content outline-none"
            type="text"
            placeholder="search any movies..."
            onChange={({ target }) => search(target.value)}
          />
          <IoMdClose
            className="text-xl cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
          <div
            className={`${
              query.length > 3 ? 'block' : 'hidden'
            } bg-hitam-content shadow rounded-b-lg p-3 absolute w-full top-[110%] z-[99]`}
          >
            {fiveMovie.map((movie) => {
              return (
                <div
                  className="flex items-center gap-5 mb-4 cursor-pointer"
                  key={movie.id}
                  onClick={() => {
                    props.detailMovie(movie)
                    setMovies([])
                    setQuery('')
                    setShowSearch(false)
                  }}
                >
                  <img
                    src={`${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`}
                    alt={movie.title}
                    className="w-28 rounded-md"
                  />
                  <p className="p-3 text-sm truncate">{movie.title}</p>
                </div>
              )
            })}

            <div
              className=" group"
              onClick={() => {
                props.movieResults(movies)
                props.resetDetailMovie(undefined)
                props.resetPage(1)
                setQuery('')
                setShowSearch(false)
              }}
            >
              <p
                className={`${
                  movies.length < 4 ? 'hidden' : 'block'
                } text-center group-hover:text-white p-2 text-sm rounded-lg bg-hitam-card cursor-pointer`}
              >
                see more results...
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* search feature on screen mobile */}
    </div>
  )
}

export default Navbar
