'use client';
import HorizontalSlider from "@/components/HorizontalSlider/index.js";
import MoviesCarousel from "../components/MovieCarousel/index.js";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getPopularSeries, getTopRatedSeries } from "@/utils/fetch-movies.js";

export default function Home() {
  return(
    <>
      <h1>NOW PLAYING</h1>
      <MoviesCarousel fetchMovies={getNowPlayingMovies}/>
    
      <h2>TOP RATED MOVIES</h2>
      <HorizontalSlider fetchMovies={getTopRatedMovies} type = 'movie' link = '/movies'/>

      <h2>POPULAR MOVIES</h2>
      <HorizontalSlider fetchMovies={getPopularMovies} type = 'movie' link = '/movies'/>

      <h2>POPULAR SERIES</h2>
      <HorizontalSlider fetchMovies={getPopularSeries} type = 'serie' link = '/series'/>

      <h2>TOP RATED SERIES</h2>
      <HorizontalSlider fetchMovies={getTopRatedSeries} type = 'serie' link = '/series'/>
    </>
  );
}