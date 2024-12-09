import { getDetails, getActorCredits } from '@/utils/fetch-data';
import ActorDetails from '@/components/ActorDetails';

export default async function ActorPage({ params }) {

    const { actorId } = params;
    const actor = await getDetails(actorId, 'person');
    const actorCredits = await getActorCredits(actorId);
  
    return (
      <ActorDetails actor={actor} credits={actorCredits.cast}/>
    );
  }