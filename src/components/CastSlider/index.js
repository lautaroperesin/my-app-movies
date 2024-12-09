import Link from 'next/link';

export default function CastSlider({ cast, mediaId, mediaUrl }) {
    return (
        <div className="w-full overflow-x-auto">
            <h3 className="text-lg font-semibold mb-2 mt-4 text-white text-center">CAST</h3>
            <div className="flex space-x-4 py-4 px-2 overflow-x-auto">
                {cast.map((actor) => (
                    <div 
                        key={actor.id} 
                        className="inline-block flex-shrink-0 w-40 snap-start group relative rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                        <Link key={actor.id} href={`/${mediaUrl}/${mediaId}/cast/${actor.id}`} className="block">
                            <div className="relative">
                                {actor.profile_path ? (
                                    <img 
                                        src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                        alt={actor.name}
                                        className="w-full h-52 object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-52 bg-gray-200 flex items-center justify-center">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-12 w-12 text-gray-500" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
                                            />
                                        </svg>
                                    </div>
                                )}
                                
                                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex flex-col justify-end p-3 text-white">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <h3 className="text-sm font-semibold truncate">{actor.name}</h3>
                                        <p className="text-xs truncate text-gray-200">{actor.character}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}