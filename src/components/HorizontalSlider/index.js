'use client';
import React, {useEffect, useState} from 'react';

export default function HorizontalSlider(){
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchMovies = async () => {
            const options = {method: 'GET', headers: {accept: 'application/json'}};
            const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', options);
            const {results} = await response.json();
            setMovies(results);
        }

        fetchMovies();
    }, []);


    return (
        <div className="my-8">
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies.map((movie) => (
            <div key={movie.id} className="min-w-[200px]">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full rounded-lg shadow-md"
            />
            <h3 className="mt-2 text-md font-semibold text-white">{movie.title}</h3>
            </div>
        ))}
        </div>
    </div>
    );
}