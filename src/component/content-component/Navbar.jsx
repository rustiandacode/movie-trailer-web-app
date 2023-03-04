// iimport icon
import { FaSearch } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { IoIosCompass } from 'react-icons/io'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

// import searchmovie from api
import {
  searchMovie,
  getGenres,
  getMovieDiscover,
} from '../../services/TheMovieDB'

// import hook
import { useState, useEffect } from 'react'

//import image broken file
import backdropBroken from '../../backdrop-broken.png'

const Navbar = (props) => {
  const [navside, setNavside] = useState()
  const [movies, setMovies] = useState([])
  const [fiveMovie, setFiveMovie] = useState([])
  const [query, setQuery] = useState('')
  const [showSearch, setShowSearch] = useState(false)

  const [genres, setGenres] = useState([])
  const [discover, setDiscover] = useState([])
  const [discover2, setDiscover2] = useState()
  const [discover3, setDiscover3] = useState()
  const [discover4, setDiscover4] = useState()
  const [discover5, setDiscover5] = useState()
  const [discover6, setDiscover6] = useState()
  const [discover7, setDiscover7] = useState()
  const [discover8, setDiscover8] = useState()
  const [discover9, setDiscover9] = useState()
  const [discover10, setDiscover10] = useState()
  const [discover11, setDiscover11] = useState()
  const [discover12, setDiscover12] = useState()
  const [discover13, setDiscover13] = useState()
  const [discover14, setDiscover14] = useState()
  const [discover15, setDiscover15] = useState()
  const [discover16, setDiscover16] = useState()
  const [discover17, setDiscover17] = useState()
  const [discover18, setDiscover18] = useState()
  const [discover19, setDiscover19] = useState()
  const [discover20, setDiscover20] = useState()
  const [homeIcon, setHomeIcon] = useState(true)
  const [wacthListIcon, setWatchListIcon] = useState()
  const [discoverIcon, setDiscoverIcon] = useState()

  const discoverAll = [].concat(
    discover,
    discover2,
    discover3,
    discover4,
    discover5,
    discover6,
    discover7,
    discover8,
    discover9,
    discover10,
    discover11,
    discover12,
    discover13,
    discover14,
    discover15,
    discover16,
    discover17,
    discover18,
    discover19,
    discover20,
  )

  // get genre list from api
  useEffect(() => {
    getGenres().then((result) => {
      setGenres(result.genres)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(1).then((result) => {
      setDiscover(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(2).then((result) => {
      setDiscover2(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(3).then((result) => {
      setDiscover3(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(4).then((result) => {
      setDiscover4(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(5).then((result) => {
      setDiscover5(result)
    })
  }, [])

  useEffect(() => {
    getMovieDiscover(6).then((result) => {
      setDiscover6(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(7).then((result) => {
      setDiscover7(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(8).then((result) => {
      setDiscover8(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(9).then((result) => {
      setDiscover9(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(10).then((result) => {
      setDiscover10(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(11).then((result) => {
      setDiscover11(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(12).then((result) => {
      setDiscover12(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(13).then((result) => {
      setDiscover13(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(14).then((result) => {
      setDiscover14(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(15).then((result) => {
      setDiscover15(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(16).then((result) => {
      setDiscover16(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(17).then((result) => {
      setDiscover17(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(18).then((result) => {
      setDiscover18(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(19).then((result) => {
      setDiscover19(result)
    })
  }, [])
  useEffect(() => {
    getMovieDiscover(20).then((result) => {
      setDiscover20(result)
    })
  }, [])

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
    <div className="container mx-auto  flex items-center justify-between gap-10 md:px-10 md:pt-10 px-5 pt-5 relative">
      <div
        className=" lg:hidden mt-2 cursor-pointer"
        onClick={() => setNavside(true)}
      >
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

      {/* start navside on mobile phone */}
      <div
        className={`${
          navside === true ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full z-[999] p-10 bg-hitam-dasar`}
      >
        <IoMdClose
          className={'text-4xl absolute right-10 top-[40px] cursor-pointer'}
          onClick={() => setNavside(false)}
        />

        <nav>
          <h2 className="text-white text-2xl font-bold cursor-pointer">
            RUSTIANDA <span className="text-red-600">MOVIES</span>
          </h2>

          <div className="pt-12 pb-5 border-b-[1px] border-b-hitam-card">
            <h4 className="pb-5 ">News Feed</h4>
            <div
              className="flex gap-5 items-center py-3 cursor-pointer"
              onClick={() => {
                setHomeIcon(true)
                setWatchListIcon(false)
                setDiscoverIcon(false)
                props.dicoverUndefined('')
                props.detailUndefined('')
                props.movieResultUndefined(undefined)
              }}
            >
              <AiFillHome
                className={`${homeIcon ? 'text-red-600' : ''} text-2xl`}
              />
              <p className="font-semibold text-md text-white">Home</p>
            </div>
            <div
              className="flex gap-5 items-center py-3 cursor-pointer"
              onClick={() => {
                setHomeIcon(false)
                setWatchListIcon(true)
                setDiscoverIcon(false)
                props.dicoverUndefined('')
                props.detailUndefined('')
                props.movieResultUndefined(undefined)
              }}
            >
              <BsFillHeartFill
                className={`${wacthListIcon ? 'text-red-600' : ''} text-xl`}
              />
              <p className="font-semibold text-md text-white">Watchlist</p>
            </div>
            <div
              className="flex gap-5 items-center py-3 cursor-pointer"
              onClick={() => {
                setHomeIcon(false)
                setWatchListIcon(false)
                setDiscoverIcon(true)
                props.discoverMovie(discoverAll)
              }}
            >
              <IoIosCompass
                className={`${discoverIcon ? 'text-red-600' : ''} text-2xl`}
              />
              <p className="font-semibold text-md text-white">Discover</p>
            </div>
          </div>
          <div className="pt-5-5">
            <h4 className="pb-5 pt-10">Categories</h4>
            <div>
              <ul>
                {genres.map((genre) => {
                  return (
                    <li
                      className="cursor-pointer"
                      key={genre.id}
                      onClick={() => {
                        props.discoverMovie(discoverAll)
                        props.genreSelected(genre.id)
                      }}
                    >
                      <p className="font-semibold text-md text-white mb-2">
                        {genre.name}
                      </p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* end navside on mobile phone */}
    </div>
  )
}

export default Navbar
