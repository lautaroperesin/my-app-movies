import { getDetails, getActorCredits } from '@/utils/fetch-data';
import ActorDetails from '@/components/ActorDetails';
import HorizontalSlider from '@/components/HorizontalSlider';

export default async function ActorPageSeries({ params }) {

    const { actorId } = params;
    const [actor, actorCredits] = await Promise.all([
      getDetails(actorId, 'person'),
      getActorCredits(actorId, 'movie_credits'),
    ]);

  
    return (
      <>
      <ActorDetails actor={actor} />
      <HorizontalSlider media={actorCredits} type='tv' title='SERIES IN WICH HE PARTICIPED'/>
      </>
    );
  }