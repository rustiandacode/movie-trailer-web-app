import { useState } from 'react'
import Navside from './component/Navside'
import Navbar from './component/content-component/Navbar'
import Hero from './component/content-component/Hero'
import PopularMovies from './component/content-component/PopularMovies'
import TrendingMovies from './component/content-component/TrendingMovies'
import DetailMovie from './component/content-component/DetailMovie'

function App() {
  const [detailMovie, setDetailMovie] = useState()

  function Content() {
    if (detailMovie === undefined) {
      return (
        <>
          <Hero detailMovie={(movie) => setDetailMovie(movie)} />
          <PopularMovies detailMovie={(movie) => setDetailMovie(movie)} />
          <TrendingMovies detailMovie={(movie) => setDetailMovie(movie)} />
        </>
      )
    } else {
      return <DetailMovie movieDetail={detailMovie} />
    }
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-between">
          <Navside />
          <div className="w-full bg-hitam-content h-screen overflow-y-scroll md:p-10 p-5">
            <Navbar />
            {/* main content */}
            {Content()}
            {/* end main content */}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
