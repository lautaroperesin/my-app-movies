export default function ActorCard({actor}) {
    return (
        <div className="group relative w-80 h-96 overflow-hidden">
            <div className='absolute inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 z-10'>
                <h2 className="text-white text-center p-4">{actor.name}</h2>
            </div>
            <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt={actor.name}
                className="w-full h-full"
            />
        </div>
    );
}