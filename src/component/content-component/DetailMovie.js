import { SlCalender } from 'react-icons/sl'
import { AiFillStar } from 'react-icons/ai'
import { GoDiffAdded } from 'react-icons/go'
import { IoMdCopy } from 'react-icons/io'

const DetailMovie = (props) => {
  const movie = props.movieDetail
  return (
    <>
      <div className="container mx-auto my-12">
        <div className="flex-row md:flex gap-5 md:gap-10 lg:p-5 ">
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}${movie.poster_path}`}
            alt={movie.title}
            className="hidden md:block md:w-[20vw] h-72 rounded-lg"
          />
          <img
            src={`${process.env.REACT_APP_BASEIMGURL}${movie.backdrop_path}`}
            alt={movie.title}
            className="md:hidden w-full rounded-lg"
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
              <div className="flex gap-2 mr-3">
                <AiFillStar className="text-lg" />
                <p className="text-sm mb-3">{movie.vote_average}</p>
              </div>
            </div>
            <p className="text-sm">{movie.overview}</p>

            <div className="my-8 flex gap-10">
              <button className="text-sm px-2 py- h-10 cursor-pointer bg-red-600 hover:bg-red-800 transition text-white font-semibold rounded-lg">
                Watch Trailer
              </button>
              <div className="flex gap-2">
                <div className="w-20 flex flex-col items-center gap-2 cursor-pointer hover:text-white">
                  <GoDiffAdded className="text-3xl " />
                  <p className="text-xs text-center">Add wachlist</p>
                </div>
                <div className="w-20 flex flex-col items-center gap-2 cursor-pointer hover:text-white">
                  <IoMdCopy className="text-3xl hover-group:text-white" />
                  <p className="text-xs text-center">Copy link</p>
                </div>
              </div>
            </div>
          </div>
          <video
            src={`${process.env.REACT_APP_BASEURL}/movie/{${movie.id}}/videos?api_key=${process.env.REACT_APP_APIKEY}`}
            width="50"
          ></video>
        </div>
      </div>
    </>
  )
}

export default DetailMovie
