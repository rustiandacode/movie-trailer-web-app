import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASEURL
const apiKey = process.env.REACT_APP_APIKEY

// get popular movie list from api
export const getPopularMovieList = async () => {
  const movies = await axios.get(
    `${baseUrl}/movie/popular/?page=1%&api_key=${apiKey}`,
  )
  return movies.data.results
}

// get now playing in theater movie list from api
export const getNowPlaying = async () => {
  const nowPlaying = await axios.get(
    `${baseUrl}/movie/now_playing/?page=1%&api_key=${apiKey}`,
  )
  return nowPlaying.data.results
}

// get trending movie list from api
export const getTrendingMovies = async () => {
  const trendingMovies = await axios.get(
    `${baseUrl}/trending/movie/day?api_key=${apiKey}`,
  )
  return trendingMovies.data.results
}

// get search movie list from api
export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`,
  )
  return search.data
}
