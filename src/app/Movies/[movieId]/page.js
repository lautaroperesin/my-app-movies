import CastSlider from "@/components/CastSlider";
import DetailCard from "@/components/DetailCard";
import HorizontalSlider from "@/components/HorizontalSlider";
import ReviewSection from "@/components/ReviewSection";
import { getDetails, getMediaCredits, getReviews, getSimilarTitles } from "@/utils/fetch-data";

export default async function MovieDetail({params}){

    const { movieId } = params;
    const type = 'movie';
    const [movie, credits, reviews, similarTitles] = await Promise.all([
        getDetails(movieId, type),
        getMediaCredits(movieId, type),
        getReviews(movieId, type),
        getSimilarTitles(movieId, type),
      ]);

    return(
        <>
        <section>
            <DetailCard media={movie} type={type}/>
        </section>
        <section>
            <CastSlider cast={credits} mediaId={movieId} mediaUrl='movies'/>
        </section>
        <section>
            <HorizontalSlider media={similarTitles} type={type} title='SIMILAR TITLES'/>
        </section>
        <section>
            <ReviewSection reviews={reviews}/>
        </section>
        </>
    )
}