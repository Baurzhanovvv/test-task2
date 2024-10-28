import { makeAutoObservable } from 'mobx';

class FavoritesStore {
    favorites = [];

    constructor() {
        makeAutoObservable(this);
    }

    addFavorite = (movie) => {
        this.favorites.push(movie);
    };
}

export default new FavoritesStore();
