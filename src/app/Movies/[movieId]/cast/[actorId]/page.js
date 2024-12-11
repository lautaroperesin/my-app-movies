import { getDetails, getActorCredits } from '@/utils/fetch-data';
import ActorDetails from '@/components/ActorDetails';
import HorizontalSlider from '@/components/HorizontalSlider';

export default async function ActorPageMovies({ params }) {

    const { actorId } = params;
    
    // Informacion del actor y Peliculas en las que ha participado el actor
    const [actor, actorCredits] = await Promise.all([
      getDetails(actorId, 'person'),
      getActorCredits(actorId, 'movie_credits'),
    ]);

    return (
      <>
      <ActorDetails actor={actor}/>
      <HorizontalSlider media={actorCredits} type='movie' title='MOVIES IN WICH HE PARTICIPED'/>
      </>
    );
  }