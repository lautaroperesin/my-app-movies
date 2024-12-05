'use client';
import HorizontalSlider from "@/components/HorizontalSlider/index.js";
import MoviesCarousel from "../components/MovieCarousel/index.js";
import Section from "../components/Section/index.js";
import Title from "../components/Title/index.js";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getPopularSeries, getTopRatedSeries } from "@/utils/fetch-movies.js";

export default function Home() {
  return(
    <>
    <Section>
      <Title>NOW PLAYING</Title>
      <MoviesCarousel fetchMovies={getNowPlayingMovies}/>
    </Section>
    
    <Section>
      <Title>TOP RATED MOVIES</Title>
      <HorizontalSlider fetchMovies={getTopRatedMovies} type = 'movie' link = '/movies'/>
    </Section>
    <Section>
      <Title>POPULAR MOVIES</Title>
      <HorizontalSlider fetchMovies={getPopularMovies} type = 'movie' link = '/movies'/>
    </Section>
    <Section>
      <Title>POPULAR SERIES</Title>
      <HorizontalSlider fetchMovies={getPopularSeries} type = 'serie' link = '/series'/>
    </Section>
    <Section>
      <Title>TOP RATED SERIES</Title>
      <HorizontalSlider fetchMovies={getTopRatedSeries} type = 'serie' link = '/series'/>
    </Section>
    </>
  );
}