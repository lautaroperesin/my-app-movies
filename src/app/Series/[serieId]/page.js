import CastSlider from "@/components/CastSlider";
import DetailCard from "@/components/DetailCard";
import HorizontalSlider from "@/components/HorizontalSlider";
import ReviewSection from "@/components/ReviewSection";
import { getDetails, getMediaCredits, getReviews, getSimilarTitles } from "@/utils/fetch-data";

export default async function SerieDetail( {params} ) {

    const { serieId } = params;
    const type = 'tv';
    const serie = await getDetails(serieId, type);
    const credits = await getMediaCredits(serieId, type);
    const reviews = await getReviews(serieId, type);
    const similarTitles = await getSimilarTitles(serieId, type);

    return(
        <>
        <DetailCard media={serie} type={type}/>
        <CastSlider cast={credits.cast} mediaId={serieId} mediaUrl='series'/>
        <HorizontalSlider media={similarTitles.results} type={type} title='SIMILAR TITLES'/>
        <ReviewSection reviews={reviews.results}/>
        </>
    );
}