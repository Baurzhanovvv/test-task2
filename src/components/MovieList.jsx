import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import movieStore from '../stores/movieStore';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const MovieList = observer(() => {
    useEffect(() => {
        movieStore.fetchMovies('Batman');
    }, []);

    return (
        <div>
            <SearchBar />
            <Grid container spacing={3} style={{ marginTop: 20 }}>
                {movieStore.movies && movieStore.movies.length > 0 ? (
                    movieStore.movies.map(movie => (
                        <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
                            <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={movie.Poster}
                                        alt={movie.Title}
                                        style={{ height: 300, objectFit: 'cover' }}
                                    />
                                    <CardContent>
                                        <Typography variant="h6">{movie.Title}</Typography>
                                        <Typography variant="body2">{movie.Year}</Typography>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No movies found.</Typography>
                )}
            </Grid>
        </div>
    );
});

export default MovieList;
