'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MoviesPage(){
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const upcomingResponse = await fetch(
          `https://api.themoviedb.org/3/movie/upcoming?api_key=9bc55808c3aabf92be422d07aefbe9c5`
        );
        const upcomingData = await upcomingResponse.json();
        setUpcomingMovies(upcomingData.results);

        const topRatedResponse = await fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=9bc55808c3aabf92be422d07aefbe9c5`
        );
        const topRatedData = await topRatedResponse.json();
        setTopRatedMovies(topRatedData.results);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return <div className="text-center text-2xl mt-10 text-white">Loading movies...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">UPCOMING</h1>
      
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="mb-12"
      >
        {upcomingMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <div className="relative h-[340px] w-full group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bg-black bg-opacity-50 text-white p-4">
                  <h2 className="text-xl font-bold">{movie.title}</h2>
                  <p className="text-sm">Release date: {movie.release_date}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <h2 className="text-2xl font-bold mb-6 mt-12">TOP RATED MOVIES</h2>
      
      {/* Top Rated Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {topRatedMovies.map((movie) => (
          <Link href={`/movies/${movie.id}`} key={movie.id}>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative h-[350px] w-full">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="bg-black p-3">
                <h3 className="font-semibold text-lg line-clamp-2">{movie.title}</h3>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-yellow-500">★ {movie.vote_average.toFixed(1)}</span>
                  <span className="text-sm text-gray-500">{movie.release_date.split('-')[0]}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};