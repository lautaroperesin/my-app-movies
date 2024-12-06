import DetailCard from "@/components/DetailCard";

export default async function SerieDetail(  {params} ) {
    const { serieId } = params;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${serieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`);
    const serie = await res.json();

    return (
        <>
        <DetailCard media={serie} type = 'serie'/>
        </>
    );
}