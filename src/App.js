// import hook
import { useState, useEffect } from 'react'

// import genres data from api
import { getGenres } from './services/TheMovieDB'

// pages
import Navside from './component/Navside'
import Navbar from './component/content-component/Navbar'
import Hero from './component/content-component/Hero'
import PopularMovies from './component/content-component/PopularMovies'
import TrendingMovies from './component/content-component/TrendingMovies'
import DetailMovie from './component/content-component/DetailMovie'
import MovieResults from './component/content-component/MovieResults'
import Footer from './component/content-component/Footer'

function App() {
  const [detailMovie, setDetailMovie] = useState()
  const [movies, setMovies] = useState()
  const [keyword, setKeyword] = useState()
  const [genres, setGenres] = useState()

  useEffect(() => {
    getGenres().then((result) => {
      const data = result
      setGenres(data.genres)
    })
  }, [])

  function Content() {
    if (detailMovie) {
      return <DetailMovie movieDetail={detailMovie} getDetailGenre={genres} />
    } else if (movies !== undefined) {
      return (
        <MovieResults
          movieResults={movies}
          getKeyword={keyword}
          detailMovie={(movie) => setDetailMovie(movie)}
        />
      )
    } else {
      return (
        <>
          <Hero detailMovie={(movie) => setDetailMovie(movie)} />
          <PopularMovies detailMovie={(movie) => setDetailMovie(movie)} />
          <TrendingMovies detailMovie={(movie) => setDetailMovie(movie)} />
        </>
      )
    }
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-between">
          <Navside />
          <div className="w-full bg-hitam-content h-screen overflow-y-scroll ">
            <Navbar
              detailMovie={(movie) => setDetailMovie(movie)}
              movieResults={(movies) => setMovies(movies)}
              keywordMovies={(keyword) => setKeyword(keyword)}
              resetDetailMovie={(reset) => setDetailMovie(reset)}
            />
            {/* main content */}
            {Content()}
            {/* end main content */}

            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
