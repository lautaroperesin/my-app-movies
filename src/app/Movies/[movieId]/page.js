import DetailCard from "@/components/DetailCard";
import Title from "@/components/Title";

export default async function MovieDetail({params}){

    const { movieId } = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`);
    const movie = await res.json();

    return (
        <>
        <Title>MOVIE DETAILS</Title>
        <DetailCard media={movie} type='movie' />
        </>
    );
}