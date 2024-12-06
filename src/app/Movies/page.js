'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardsGrid from '@/components/CardsGrid';
import {getTopRatedMovies} from '@/utils/fetch-movies';

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

        const topRatedResponse = await getTopRatedMovies();
        setTopRatedMovies(topRatedResponse);

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

      {/* Slider de Upcoming Movies usando libreria Swiper */}
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
        className="mb-10"
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
                <div className="relative bg-black bg-opacity-100 text-white p-4">
                  <h2 className="text-xl font-bold">{movie.title}</h2>
                  <p className="text-sm">Release date: {movie.release_date}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      
      {/* Grilla de Top Rated Movies */}
      <h2 className="text-2xl font-bold mb-6 mt-12">TOP RATED</h2>
      <CardsGrid media={topRatedMovies} />
    </div>
  );
};