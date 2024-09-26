'use client';
import { useEffect, useState } from "react";

export default function Carousel(){
    const [movies, setMovies] = useState([]);
    const [currentMovie, setCurrentMovie] = useState(0);

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
    }, [currentMovie]);

    const handleClickNext = () => {
        currentMovie == movies.length - 1 ? setCurrentMovie(0) : setCurrentMovie(currentMovie + 1);
    }

    const handleClickPrev = () => {
        currentMovie == 0 ? setCurrentMovie(movies.length - 1) : setCurrentMovie(currentMovie - 1);
    }

    return (
        <>
            <div className="w-full flex justify-center items-center">
                <button className="absolute left-20 bg-gray-800 text-white p-5 rounded-full" onClick={handleClickPrev}>
                    &#10094;
                </button>

                {movies.length > 0 && (
                <div className="text-center space-y-4 text-white mt-5">
                    <img src={`https://image.tmdb.org/t/p/w500${movies[currentMovie].poster_path}`} alt={movies[currentMovie].title} className="h-96 mx-auto" />   
                    <h2 className="text-xl font-bold">{movies[currentMovie].title}</h2>
                    <p className="text-sm text-gray-500">{movies[currentMovie].overview}</p>
                    <button className="bg-white p-3 m-3 rounded-full text-black" onClick={()=>alert(`Detalles de ${movies[currentMovie].title}`)}>
                        More info
                    </button>
                </div>
                )}

                <button className="absolute right-20 bg-gray-800 text-white p-5 rounded-full" onClick={handleClickNext}>
                    &#10095;
                </button>
            </div>
        </>
    );
}