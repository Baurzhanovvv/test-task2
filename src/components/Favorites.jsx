
import React from 'react';
import { observer } from 'mobx-react-lite';
import favoritesStore from '../stores/favoritesStore';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const Favorites = observer(() => (
    <div>
        {favoritesStore.favorites.map(movie => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <Card>
                    <CardMedia component="img" image={movie.Poster} alt={movie.Title} />
                    <CardContent>
                        <Typography variant="h6">{movie.Title}</Typography>
                        <Typography variant="body2">{movie.Year}</Typography>
                    </CardContent>
                </Card>
            </Link>
        ))}
    </div>
));

export default Favorites;
