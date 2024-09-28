import HorizontalSlider from "@/components/HorizontalSlider/index.js";
import MoviesCarousel from "../components/MovieCarousel/index.js";
import Section from "../components/Section/index.js";
import Title from "../components/Title/index.js";

export default function Home() {
  return(
    <>
    <Section>
      <Title>NOW PLAYING</Title>
      <MoviesCarousel />
    </Section>
    
    <Section>
      <Title>TOP RATED MOVIES</Title>
      <HorizontalSlider />
    </Section>
    <Section>
      <Title>POPULAR MOVIES</Title>
      <HorizontalSlider />
    </Section>
    </>
  );
}