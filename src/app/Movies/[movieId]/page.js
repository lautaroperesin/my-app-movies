import DetailCard from "@/components/DetailCard";
import { getDetails, getCredits } from "@/utils/fetch-data";

export default async function MovieDetail({params}){

    const { movieId } = params;
    const type = 'movie';
    const movie = await getDetails(movieId, type);
    const credits = await getCredits(movieId, type);

    return <DetailCard media={movie} type={type} credits={credits.cast}/>
}