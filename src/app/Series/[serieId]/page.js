import DetailCard from "@/components/DetailCard";
import Title from "@/components/Title";

export default async function SerieDetail(  {params} ) {
    const { serieId } = params;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`);
    const serie = await res.json();

    return (
        <>
        <Title>SERIE DETAILS</Title>
        <DetailCard media={serie} type = 'serie'/>
        </>
    );
}