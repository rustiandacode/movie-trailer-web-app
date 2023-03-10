// import icon
import { SlCalender } from 'react-icons/sl'
import { AiFillStar } from 'react-icons/ai'
import { getTrailer } from '../../services/TheMovieDB'

import { useState, useEffect } from 'react'

import YouTube from 'react-youtube'

const DetailMovie = (props) => {
  const movie = props.movieDetail
  const genres = props.allGenres
  const [selected, setSelected] = useState()
  const [trailer, setTrailer] = useState(false)

  useEffect(() => {
    getTrailer(movie.id).then((result) => {
      setSelected(result.data)
    })
  }, [movie])

  console.log(selected)

  const renderTrailer = (h = '200', w = '375') => {
    const trailer = selected.results.find(
      (vid) => vid.name === 'Official Trailer',
    )

    const videoTrailer = () => {
      if (trailer === undefined) {
        return selected.results[0]
      }
      return trailer
    }

    const opts = {
      height: h,
      width: w,
    }
    return <YouTube opts={opts} videoId={videoTrailer().key} />
  }

  function findSpecificGenre(x) {
    return genres.find(({ id }) => id === x)
  }
  const genreResult = movie.genre_ids.map((id) => findSpecificGenre(id))

  console.log(trailer)

  return (
    <div className="container mx-auto my-12 px-5">
      <div>
        <div
          className={
            trailer === true
              ? 'w-full h-full absolute left-0 top-0 bg-hitam-dasar opacity-90 blur-md'
              : ''
          }
        ></div>
        <div
          className={
            trailer === true
              ? 'mx-auto w-[500px] top-1/4 absolute left-[500px]'
              : 'md:hidden'
          }
        >
          {selected ? renderTrailer() : null}
          <p
            className="mt-8 text-center text-white bg-red-600 w-[80px] hover:opacity-90 cursor-pointer md:block hidden"
            onClick={() => setTrailer(false)}
          >
            close x
          </p>
        </div>
      </div>
      <div className="flex-row md:flex gap-5 md:gap-10 lg:p-5 ">
        <img
          src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
          alt={movie.title}
          className="hidden md:block md:w-[20vw] h-72 rounded-lg"
        />
        <div className=" mt-6 w-full">
          <h3 className="text-white text-lg md:text-3xl font-semibold mb-3">
            {movie.title}
          </h3>
          <div className="flex">
            <div className="flex gap-2 mr-3">
              <SlCalender className="text-lg" />
              <p className="text-sm mb-3">{movie.release_date}</p>
            </div>
            <div className="flex gap-2 mr-8">
              <AiFillStar className="text-lg" />
              <p className="text-sm mb-3">{movie.vote_average}</p>
            </div>
          </div>
          <div className="flex ml-2 mb-2 flex-wrap gap-2">
            {genreResult.map((e) => {
              return (
                <li className="text-sm mr-5" key={e.id}>
                  {e.name}
                </li>
              )
            })}
          </div>
          <p className="text-sm">{movie.overview}</p>

          <div className="my-8 flex gap-10">
            <button
              className=" hidden md:block text-sm px-2 py- h-10 cursor-pointer bg-red-600 hover:bg-red-800 transition text-white font-semibold rounded-lg"
              onClick={() => setTrailer(true)}
            >
              Watch Trailer
            </button>
            {/* <div className="flex gap-2">
              <div className="w-20 flex flex-col items-center gap-2 cursor-pointer hover:text-white">
                <GoDiffAdded className="text-3xl " />
                <p className="text-xs text-center">Add wachlist</p>
              </div>
              <div className="w-20 flex flex-col items-center gap-2 cursor-pointer hover:text-white">
                <IoMdCopy className="text-3xl hover-group:text-white" />
                <p className="text-xs text-center">Copy link</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailMovie
