'use client';
import React, {useEffect, useState} from 'react';

export default function MovieDetail(params){
    const [movie, setMovie] = useState(null);
    const { movieId } = params;

    useEffect(()=>{
        const fetchMovieDetails = async () => {
            const options = {
                method: 'GET',
                headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YmM1NTgwOGMzYWFiZjkyYmU0MjJkMDdhZWZiZTljNSIsIm5iZiI6MTcyODU5OTMzNS4zNjczLCJzdWIiOiI2NmQxMDZmOTc5M2YwZjQ2M2MzMDNhODQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aCw_ZwTyQth7JB5-J6X1VgtP0Omt1hzyGmJly1-miMQ'
                }
            };
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`, options);
            const data = await response.json();
            setMovie(data);
            };

            fetchMovieDetails();
    }, [movieId]);

    console.log(movie);
    console.log(params);
    console.log(params.movieId);
    console.log('Pelicula: '+movie.title);

    return (
/*         <div>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
    </div> */
    <h1>HA</h1>
    );
}