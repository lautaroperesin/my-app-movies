'use client';
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MoviesCarousel( {movies} ) {
    const [position, setPosition] = useState(0);

    useEffect(()=>{
        const interval = setInterval(() => {
            handleClickNext();
          }, 8000);
        
          return () => clearInterval(interval);
    }, [position]);

    const handleClickNext = () => {
        setPosition((prevPosition) => (prevPosition === movies.length - 1 ? 0 : prevPosition + 1));
    }

    const handleClickPrev = () => {
        setPosition((prevPosition) => (prevPosition === 0 ? movies.length - 1 : prevPosition - 1));
    }

    if (!movies || movies.length === 0) {
        return <p className="text-center text-gray-500">No movies available to display.</p>;
      }

      const currentMovie = movies[position];

    return (
        <>
            <div className="carousel-container">
                <button className="button-left absolute top-1/2 transform -translate-y-1/2 left-2 text-white text-3xl"
                        onClick={handleClickPrev}>
                    &#10094;
                </button>

                <button className="button-right absolute top-1/2 transform -translate-y-1/2 right-2 text-white text-3xl"
                        onClick={handleClickNext}>
                    &#10095;
                </button>

                <div className="text-center space-y-4 text-white">
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
                        alt={currentMovie.title}
                        className="h-96 mx-auto rounded-lg shadow-lg"
                    />   
                    <h2 className="text-xl font-bold">{currentMovie.title}</h2>
                    <p className="text-sm text-gray-500"> {currentMovie.overview}</p>
                    <Link href={`/movies/${currentMovie.id}`}  >
                        <button className="btn-moreinfo">
                            More info
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}