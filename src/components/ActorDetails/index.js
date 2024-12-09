import HorizontalSlider from "../HorizontalSlider";

export default function ActorDetails({ actor, credits }) {
  
    return (
      <div className="bg-black text-red-900 min-h-screen p-6">
        <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {/* Actor Image */}
            <div className="md:col-span-1">
              <img 
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} 
                alt={actor.name} 
                className="w-full h-auto rounded-lg shadow-lg border-4"
              />
            </div>
            
            {/* Actor Details */}
            <div className="md:col-span-2">
              <h1 className="text-4xl font-bold text-red-700 mb-4">{actor.name}</h1>
              
              {/* Basic Information */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-white">
                  <p className="mr-2 text-red-700" />
                  <span>Birthday: {actor.birthday}</span>
                </div>
                
                <div className="flex items-center text-white">
                  <p className="mr-2 text-red-700" />
                  <span>Place of birth: {actor.place_of_birth || 'No available'}</span>
                </div>
              </div>
              
              {/* Biography */}
              <div className="bg-neutral-800 p-4 rounded-lg mb-6">
                <h2 className="text-2xl text-red-700 mb-3">Biography</h2>
                <p className="text-white">
                  {actor.biography || 'No biographical information available.'}
                </p>
              </div>
            </div>
          </div>
          <HorizontalSlider media={credits} title='ALSO PARTICIPATED'/>
        </div>
      </div>
    );
  }