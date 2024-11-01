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
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide mt-12 p-4">
            {movies.map((movie) => (
                <div key={movie.id} className="group relative w-86 h-96 overflow-hidden flex-shrink-0">
                    <a href={`/movies/${movie.id}`} className="block w-full h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform opacity-0 group-hover:opacity-100 z-10">
                        <h2 className="text-white text-2xl font-semibold text-center p-4">{movie.title}</h2>
                    </div>
                    
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title}
                            className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-70"
                        />
                    </a>
                </div>
            ))}
        </div>
    );
}
// estilos del div del titulo de la pelicula
//group-hover:flex w-[240px] h-[360px] bg-black z-10 bg-transparent flex items-center justify-center