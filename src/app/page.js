import MoviesCarousel from "./components/MovieCarousel/index.js";
import Section from "./components/Section/index.js";
import Title from "./components/Title/index.js";

export default function Home() {


  return(
    <>
    <Title>NOW PLAYING</Title>
    <Section>
      <MoviesCarousel />
    </Section>
    <Section>
      <Title>POPULAR MOVIES</Title>
      <MoviesCarousel />
    </Section>
    </>
  );
}