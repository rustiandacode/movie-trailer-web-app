// import elemet for pages
import Navside from './component/Navside'
import Navbar from './component/content-component/Navbar'
import Hero from './component/content-component/Hero'
import PopularMovies from './component/content-component/PopularMovies'
import TrendingMovies from './component/content-component/TrendingMovies'
import DetailMovie from './component/content-component/DetailMovie'
import MovieResults from './component/content-component/MovieResults'
import Discover from './component/content-component/Discover'
import Footer from './component/content-component/Footer'

// import hook
import { useState, useEffect } from 'react'

// import getGenre from api
import { getGenres } from './services/TheMovieDB'

function App() {
  const [detailMovie, setDetailMovie] = useState()
  const [movies, setMovies] = useState()
  const [keyword, setKeyword] = useState()
  const [genres, setGenres] = useState()
  const [page, setResetPage] = useState(1)
  const [discover, setDiscover] = useState()
  const [genreSelected, setGenreSelected] = useState()

  useEffect(() => {
    getGenres().then((result) => {
      setGenres(result.genres)
    })
  }, [])

  function Content() {
    if (discover) {
      return (
        <Discover
          discoverMovie={discover}
          detailMovie={(movie) => setDetailMovie(movie)}
          dicoverUndefined={(x) => setDiscover(x)}
          allGenres={genres}
          genreSelected={genreSelected}
        />
      )
    } else if (detailMovie) {
      return <DetailMovie movieDetail={detailMovie} allGenres={genres} />
    } else if (movies) {
      return (
        <MovieResults
          movieResults={movies}
          resetPage={page}
          getKeyword={keyword}
          detailMovie={(movie) => setDetailMovie(movie)}
          moviePages={(moviePages) => setMovies(moviePages)}
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
          <Navside
            discoverMovie={(discover) => setDiscover(discover)}
            dicoverUndefined={(reset) => setDiscover(reset)}
            detailUndefined={(reset) => setDetailMovie(reset)}
            movieResultUndefined={(reset) => setMovies(reset)}
            genreSelected={(genre) => setGenreSelected(genre)}
          />
          <div className="w-full bg-hitam-content h-screen overflow-y-scroll ">
            <Navbar
              detailMovie={(movie) => setDetailMovie(movie)}
              movieResults={(movies) => setMovies(movies)}
              keywordMovies={(keyword) => setKeyword(keyword)}
              resetDetailMovie={(reset) => setDetailMovie(reset)}
              resetPage={(reset) => setResetPage(reset)}
              dicoverUndefined={(reset) => setDiscover(reset)}
              detailUndefined={(reset) => setDetailMovie(reset)}
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
