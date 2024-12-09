export default async function ActorDetail({ params }) {

    const { actorId } = params;
  
    return (
      <div>
        <h1>Actor Details</h1>
        <p>Actor ID: {actorId}</p>
      </div>
    );
  }