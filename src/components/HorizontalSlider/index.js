export default function HorizontalSlider({media, type, title}){
    const getTitle = (item) => {
        return type === 'movie' ? item.title : item.name;
    }

    const link = type === 'movie' ? '/movies' : '/series';

    return (
        <div className="mt-12">
        <h2 className="text-lg font-semibold mb-2 mt-4 text-white text-center">{title}</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hide p-4">
            {media.map((movie) => (
                <div key={movie.id} className="group relative w-86 h-96 overflow-hidden flex-shrink-0">
                    <a href={`${link}/${movie.id}`} className="block w-full h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-all duration-300 transform opacity-0 group-hover:opacity-100 group-hover:scale-105"
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 transform opacity-0 group-hover:opacity-100 z-10">
                        <h2 className="text-white text-2xl font-semibold text-center p-4">{getTitle(movie)}</h2>
                    </div>
                    
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={getTitle(movie)}
                            className="w-full h-full object-cover transition-all duration-300 transform group-hover:scale-110 group-hover:opacity-70"
                        />
                    </a>
                </div>
            ))}
        </div>
        </div>
    );
}