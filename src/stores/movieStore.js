import { makeAutoObservable } from 'mobx';
import { searchMovies } from '../services/movieService';

class MovieStore {
    movies = [];

    constructor() {
        makeAutoObservable(this);
    }

    fetchMovies = async (query) => {
        const response = await searchMovies(query);
        this.movies = response.data.Search;
    };
}

export default new MovieStore();
