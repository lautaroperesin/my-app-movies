import CastSlider from "@/components/CastSlider";
import DetailCard from "@/components/DetailCard";
import HorizontalSlider from "@/components/HorizontalSlider";
import ReviewSection from "@/components/ReviewSection";
import { getDetails, getMediaCredits, getReviews, getSimilarTitles } from "@/utils/fetch-data";

export default async function SerieDetail( {params} ) {

    const { serieId } = params;
    const type = 'tv';
    const [serie, credits, reviews, similarTitles] = await Promise.all([
        getDetails(serieId, type),
        getMediaCredits(serieId, type),
        getReviews(serieId, type),
        getSimilarTitles(serieId, type),
      ]);

    return(
        <>
        <DetailCard media={serie} type={type}/>
        <CastSlider cast={credits} mediaId={serieId} mediaUrl='series'/>
        <HorizontalSlider media={similarTitles} type={type} title='SIMILAR TITLES'/>
        <ReviewSection reviews={reviews}/>
        </>
    );
}