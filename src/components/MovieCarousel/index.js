'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MoviesCarousel(){
    const [movies, setMovies] = useState([]);
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        const fetchMovies = async () => {
            const options = {method: 'GET', headers: {accept: 'application/json'}};
            const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', options);
            const {results} = await response.json();
            setMovies(results);
        }

        fetchMovies();
    }, []);
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleClickNext();
        }, 8000);
        return () =>{
            clearTimeout(timer);
        }
    }, [position]);

    const handleClickNext = () => {
        position == movies.length - 1 ? setPosition(0) : setPosition(position + 1);
    }

    const handleClickPrev = () => {
        position == 0 ? setPosition(movies.length - 1) : setPosition(position - 1);
    }

    return (
        <>
            <div className="carousel-container">
                <button className="button-left" onClick={handleClickPrev}>
                    &#10094;
                </button>

                {movies.length > 0 && (
                <div className="text-center space-y-4 text-white mt-5">
                    <img src={`https://image.tmdb.org/t/p/w500${movies[position].poster_path}`} alt={movies[position].title} className="h-96 mx-auto" />   
                    <h2 className="text-xl font-bold">{movies[position].title}</h2>
                    <p className="text-sm text-gray-500">{movies[position].overview}</p>
                    <Link href={`/movies/${movies[position].id}`} >
                    <button className="bg-white p-3 m-3 rounded-full text-black" >More info</button>
                    </Link>
                </div>
                )}

                <button className="button-right" onClick={handleClickNext}>
                    &#10095;
                </button>
            </div>
        </>
    );
}