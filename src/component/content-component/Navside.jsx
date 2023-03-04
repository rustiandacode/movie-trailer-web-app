// import react icon
import { IoIosCompass } from 'react-icons/io'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

// import Genres List
import { getGenres, getMovieDiscover } from '../../services/TheMovieDB'

// import hook
import { useState, useEffect } from 'react'

const Navside = (props) => {
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

  return (
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
  )
}

export default Navside
