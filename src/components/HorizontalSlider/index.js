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
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide mt-12">
        {movies.map((movie) => (
            <div key={movie.id} className="group relative w-80 h-96 overflow-hidden">
                <div className='absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 z-10'>
                    <h2 className="text-white text-center p-4">{movie.title}</h2>
                </div>
                <Link href={`/movies/${currentMovie[position].id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-full"
                    />
                </Link>
            </div>
        ))}
        </div>
    );
}
// estilos del div del titulo de la pelicula
//group-hover:flex w-[240px] h-[360px] bg-black z-10 bg-transparent flex items-center justify-center