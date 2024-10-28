import React from 'react';
import { TextField } from '@mui/material';
import movieStore from '../stores/movieStore';

const SearchBar = () => {
    const handleSearch = (e) => {
        movieStore.fetchMovies(e.target.value);
    };

    return (
        <TextField
            label="Search for movies"
            variant="outlined"
            fullWidth
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
