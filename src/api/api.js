import axios from 'axios'
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const API_KEY = '42ebabea7243cf0ffa47f2e71d86a5c3'
export const getTrendingMovies = async () => {
            const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
            return await response.data
}
export const getSearchedMovies = async (q) => {
    const response = await axios.get(`search/movie?query=${q}&api_key=${API_KEY}`)
    return await response.data
}

export const getMovieById = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`)
    return await response.data
}

export const getMovieDetails = async (id, operation) => {
    const response = await axios.get(`movie/${id}/${operation}?api_key=${API_KEY}`)
    return await response.data
}