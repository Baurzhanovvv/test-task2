import { makeAutoObservable } from 'mobx';
import { getMovieDetails } from '../services/movieService';

class CurrentMovieStore {
    movie = null;

    constructor() {
        makeAutoObservable(this);
    }

    fetchMovieDetails = async (id) => {
        const response = await getMovieDetails(id);
        this.movie = response.data;
    };
}

export default new CurrentMovieStore();
