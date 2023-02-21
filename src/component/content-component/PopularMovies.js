import { Swiper, SwiperSlide } from 'swiper/react'
import { getPopularMovieList } from '../../services/TheMovieDB'
import { useState, useEffect } from 'react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules

const PopularMovies = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getPopularMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  return (
    <>
      <p className="my-6 text-white font-semiboldbold text-sm ">
        Popular Movies
      </p>
      <Swiper
        pagination={true}
        spaceBetween={15}
        className="mySwiper max-w-[1050px] flex"
        breakpoints={{
          0: {
            slidesPerView: 4,
          },
          640: {
            slidesPerView: 6,
          },
        }}
      >
        {popularMovies.map((movie) => {
          return (
            <SwiperSlide key={movie.id}>
              <div className="max-w-[208px] cursor-pointer group hover:bg-gray-500 bg-hitam-card rounded-lg p-2 md:p-3 shadow-md">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                  className="w-16 mb-2 rounded-lg"
                />
                <p className="truncate text-xs md:text-sm group-hover:text-white">
                  {movie.title}
                </p>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default PopularMovies
