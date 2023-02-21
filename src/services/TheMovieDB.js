import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

export const getPopularMovieList = async () => {
  const movies = await axios.get(
    `${baseUrl}/movie/popular/?page=1%&api_key=${apiKey}`,
  )
  return movies.data.results
}

export const getNowPlaying = async () => {
  const nowPlaying = await axios.get(
    `${baseUrl}/movie/now_playing/?page=1%&api_key=${apiKey}`,
  )
  return nowPlaying.data.results
}

export const getTrendingMovies = async () => {
  const trendingMovies = await axios.get(
    `${baseUrl}/trending/movie/day?api_key=${apiKey}`,
  )
  return trendingMovies.data.results
}
