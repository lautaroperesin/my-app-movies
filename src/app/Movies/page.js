'use client';

import React, { useState, useEffect } from 'react';
import CardsGrid from '@/components/CardsGrid';
import {getTopRatedMovies, getUpcomingMovies} from '@/utils/fetch-movies';
import Slider from '@/components/Slider';

export default function MoviesPage(){
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const upcomingResponse = await getUpcomingMovies();
        setUpcomingMovies(upcomingResponse);

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

      {/* Slider Upcoming Movies usando libreria Swiper */}
      <h1 className="text-3xl font-bold mb-8">UPCOMING</h1>
      <Slider media={upcomingMovies} type='movie' />

      {/* Grilla de Top Rated Movies */}
      <h2 className="text-2xl font-bold mb-6 mt-12">TOP RATED</h2>
      <CardsGrid media={topRatedMovies} type='movie' />
    </div>
  );
};