
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
      <MoviesCarousel movies={nowPlayingMovies}/>

      <HorizontalSlider media={topRatedMovies} type='movie' title='TOP RATED MOVIES'/>

      <HorizontalSlider media={popularMovies} type='movie' title='POPULAR MOVIES'/>

      <HorizontalSlider media={popularSeries} type='serie' title='POPULAR SERIES'/>

      <HorizontalSlider media={topRatedSeries} type='serie' title='TOP RATED SERIES'/>
    </>
  );
}