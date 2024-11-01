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
      <HorizontalSlider fetchMovies={getTopRatedMovies}/>
    </Section>
    <Section>
      <Title>POPULAR MOVIES</Title>
      <HorizontalSlider fetchMovies={getPopularMovies}/>
    </Section>
    <Section>
      <Title>POPULAR SERIES</Title>
      <HorizontalSlider fetchMovies={getPopularSeries}/>
    </Section>
    <Section>
      <Title>TOP RATED SERIES</Title>
      <HorizontalSlider fetchMovies={getTopRatedSeries}/>
    </Section>
    </>
  );
}