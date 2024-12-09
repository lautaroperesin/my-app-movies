import CastSlider from "@/components/CastSlider";
import DetailCard from "@/components/DetailCard";
import ReviewSection from "@/components/ReviewSection";
import { getDetails, getCredits, getReviews } from "@/utils/fetch-data";

export default async function SerieDetail( {params} ) {
    const { serieId } = params;
    const type = 'tv';
    const serie = await getDetails(serieId, type);
    const credits = await getCredits(serieId, type);
    const reviews = await getReviews(serieId, type);

    return(
        <>
        <DetailCard media={serie} type={type} credits={credits.cast}/>
        <CastSlider cast={credits.cast}/>
        <ReviewSection reviews={reviews.results}/>
        </>
    );
}