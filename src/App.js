import { useState } from 'react'
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

  function Content() {
    if (detailMovie) {
      return <DetailMovie movieDetail={detailMovie} />
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
