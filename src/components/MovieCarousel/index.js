'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MoviesCarousel( {movies} ) {
    console.log(movies);
    const [position, setPosition] = useState(0);

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

    if (!movies || movies.length === 0) {
        return <p className="text-center text-gray-500">No movies available to display.</p>;
      }

    return (
        <>
            <div className="carousel-container relative">
                <button className="button-left absolute top-1/2 transform -translate-y-1/2 left-2 text-white text-3xl"
                        onClick={handleClickPrev}>
                    &#10094;
                </button>

                <div className="text-center space-y-4 text-white mt-5">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movies[position].poster_path}`}
                        alt={movies[position].title}
                        className="h-96 mx-auto rounded-lg shadow-lg"
                    />   
                    <h2 className="text-xl font-bold">{movies[position].title}</h2>
                    <p className="text-sm text-gray-500">{movies[position].overview}</p>
                    <Link href={`/movies/${movies[position].id}`} >
                        <button className="bg-white px-6 py-2 mt-3 rounded-full text-black shadow-lg hover:bg-gray-200 transition">
                            More info
                        </button>
                    </Link>
                </div>

                <button className="button-right absolute top-1/2 transform -translate-y-1/2 right-2 text-white text-3xl"
                        onClick={handleClickNext}>
                    &#10095;
                </button>
            </div>
        </>
    );
}