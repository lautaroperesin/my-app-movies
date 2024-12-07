
import HorizontalSlider from "@/components/HorizontalSlider/index.js";
import MoviesCarousel from "../components/MovieCarousel/index.js";
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies, getPopularSeries, getTopRatedSeries } from "@/utils/fetch-data.js";

export default async function Home() {

  const [topRatedMovies, popularMovies, nowPlayingMovies, popularSeries, topRatedSeries] = await Promise.all([
    getTopRatedMovies(),
    getPopularMovies(),
    getNowPlayingMovies(),
    getPopularSeries(),
    getTopRatedSeries()
  ]);

  return(
    <>
      <h1>NOW PLAYING</h1>
      <MoviesCarousel movies={nowPlayingMovies}/>
    
      <h2>TOP RATED MOVIES</h2>
      <HorizontalSlider media={topRatedMovies} type='movie'/>

      <h2>POPULAR MOVIES</h2>
      <HorizontalSlider media={popularMovies} type='movie'/>

      <h2>POPULAR SERIES</h2>
      <HorizontalSlider media={popularSeries} type='serie'/>

      <h2>TOP RATED SERIES</h2>
      <HorizontalSlider media={topRatedSeries} type='serie'/>
    </>
  );
}