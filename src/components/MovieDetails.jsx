import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import currentMovieStore from '../stores/currentMovieStore';
import { Typography, Card, CardContent } from '@mui/material';

const MovieDetails = observer(() => {
    const { id } = useParams();

    useEffect(() => {
        currentMovieStore.fetchMovieDetails(id);
    }, [id]);

    const movie = currentMovieStore.movie;
    return (
        movie && (
            <Card>
                <CardContent>
                    <Typography variant="h4">{movie.Title}</Typography>
                    <Typography variant="subtitle1">{movie.Genre}</Typography>
                    <Typography>{movie.Plot}</Typography>
                    <iframe
                        src="https://www.youtube.com/embed/VIDEO_ID"
                        title="Movie Video"
                        width="100%"
                        height="400px"
                    />
                </CardContent>
            </Card>
        )
    );
});

export default MovieDetails;
