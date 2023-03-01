// import react icon
import { IoIosCompass } from 'react-icons/io'
import { BsFillHeartFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'

// import Genres List
import { getGenres, getMovieDiscover } from '../services/TheMovieDB'
// import hook
import { useState, useEffect } from 'react'

const Navside = (props) => {
  const [genres, setGenres] = useState([])
  const [discover, setDiscover] = useState()
  const [homeIcon, setHomeIcon] = useState(true)
  const [wacthListIcon, setWatchListIcon] = useState()
  const [discoverIcon, setDiscoverIcon] = useState()

  // get genre list from api
  useEffect(() => {
    getGenres().then((result) => {
      const data = result
      setGenres(data.genres)
    })
  }, [])

  // get discover list from api
  useEffect(() => {
    getMovieDiscover().then((result) => {
      setDiscover(result)
    })
  }, [])

  return (
    <nav className="p-10 md:w-1/5  h-screen overflow-y-scroll hidden lg:block">
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
            props.discoverMovie(discover)
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
                <li className="cursor-pointer" key={genre.id}>
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
