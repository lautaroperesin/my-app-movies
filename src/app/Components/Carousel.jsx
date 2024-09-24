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
        }, 5000);
        return () =>{
            clearTimeout(timer);
        }
    }, [currentMovie]);

    console.log(movies);

    const handleClickNext = () => {
        currentMovie == movies.length - 1 ? setCurrentMovie(0) : setCurrentMovie(currentMovie + 1);
    }

    const handleClickPrev = () => {
        currentMovie == 0 ? setCurrentMovie(movies.length - 1) : setCurrentMovie(currentMovie - 1);
    }

    return (
        <>
        {movies.length > 0 && (
            <div className="flex justify-between bg-gradient-to-b from-[#000000] to-[#180303] w-full min-h-screen mx-auto">
            <button className="button-prev-next" onClick={handleClickPrev}>Previous</button>
            <div className="grid place-items-center text-white">
                <img src={`https://image.tmdb.org/t/p/w500${movies[currentMovie].poster_path}`} alt={movies[currentMovie].title} />   
                <h2>{movies[currentMovie].title}</h2>
                <p>{movies[currentMovie].overview}</p>
                <button onClick={()=>alert(`Detalles de ${movies[currentMovie].title}`)}>More info</button>
            </div>
            <button className="button-prev-next" onClick={handleClickNext}>Next</button>
            </div>
        )}
        </>
    );
}