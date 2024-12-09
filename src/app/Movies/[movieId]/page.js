import CastSlider from "@/components/CastSlider";
import DetailCard from "@/components/DetailCard";
import HorizontalSlider from "@/components/HorizontalSlider";
import ReviewSection from "@/components/ReviewSection";
import { getDetails, getCredits, getReviews, getSimilarTitles } from "@/utils/fetch-data";

export default async function MovieDetail({params}){

    const { movieId } = params;
    const type = 'movie';
    const movie = await getDetails(movieId, type);
    const credits = await getCredits(movieId, type);
    const reviews = await getReviews(movieId, type);
    const similarTitles = await getSimilarTitles(movieId, type);

    return(
        <>
        <DetailCard media={movie} type={type}/>
        <CastSlider cast={credits.cast} mediaId={movieId} mediaUrl='movies'/>
        <HorizontalSlider media={similarTitles.results} type={type} title='SIMILAR TITLES'/>
        <ReviewSection reviews={reviews.results}/>
        </>
    )
}