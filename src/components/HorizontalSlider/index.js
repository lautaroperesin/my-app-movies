'use client';
import React, {useEffect, useState} from 'react';

export default function HorizontalSlider({fetchMovies}){
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const loadMovies = async () => {
            const data = await fetchMovies();
            setMovies(data);
        };

        loadMovies();
    }, [fetchMovies]);

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