import { getDetails, getActorCredits } from '@/utils/fetch-data';
import ActorDetails from '@/components/ActorDetails';
import HorizontalSlider from '@/components/HorizontalSlider';

export default async function ActorPageSeries({ params }) {

    const { actorId } = params;
    const actor = await getDetails(actorId, 'person');
    const actorCredits = await getActorCredits(actorId, 'tv_credits');
  
    return (
      <>
      <ActorDetails actor={actor} />
      <HorizontalSlider media={actorCredits} type='tv' title='SERIES IN WICH HE PARTICIPED'/>
      </>
    );
  }