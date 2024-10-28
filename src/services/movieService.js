import axios from 'axios';

const API_KEY = '7e59b8de';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = (query) => axios.get(`${BASE_URL}&s=${query}`);
export const getMovieDetails = (id) => axios.get(`${BASE_URL}&i=${id}`);
