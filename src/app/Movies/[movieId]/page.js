import DetailCard from "@/components/DetailCard";

export default async function MovieDetail({params}){

    const { movieId } = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`);
    const movie = await res.json();

    return (
        <>
        <h1>MOVIE DETAILS</h1>
        <DetailCard media={movie} type='movie'/>
        </>
    );
}