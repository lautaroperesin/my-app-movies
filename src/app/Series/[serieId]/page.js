import DetailCard from "@/components/DetailCard";
import { getDetails, getCredits } from "@/utils/fetch-data";

export default async function SerieDetail( {params} ) {
    const { serieId } = params;
    const type = 'tv';
    const serie = await getDetails(serieId, type);
    const credits = await getCredits(serieId, type);

    return <DetailCard media={serie} type={type} credits={credits.cast}/>
}