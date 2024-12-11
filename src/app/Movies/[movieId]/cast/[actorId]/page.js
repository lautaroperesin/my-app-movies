import { getDetails, getActorCredits } from '@/utils/fetch-data';
import ActorDetails from '@/components/ActorDetails';
import HorizontalSlider from '@/components/HorizontalSlider';

export default async function ActorPageMovies({ params }) {

    const { actorId } = params;
    
    // Informacion del actor
    const actor = await getDetails(actorId, 'person');

    // Peliculas en las que ha participado el actor
    const actorCredits = await getActorCredits(actorId, 'movie_credits');

    return (
      <>
      <ActorDetails actor={actor}/>
      <HorizontalSlider media={actorCredits.cast} type='movie' title='MOVIES IN WICH HE PARTICIPED'/>
      </>
    );
  }