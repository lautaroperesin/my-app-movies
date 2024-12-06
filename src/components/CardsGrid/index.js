import Link from 'next/link';

export default function CardsGrid({ media }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {media.map((movie) => (
      <div className="bg-black rounded shadow overflow-hidden hover:shadow transition-shadow group transform transition-transform duration-300 group-hover:scale-105">
      <Link href={`/movies/${movie.id}`} key={movie.id}>
        <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          <div className="p-3">
            <h3 className="font-semibold text-lg line-clamp-2">{movie.title}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-yellow-500">★ {movie.vote_average.toFixed(1)}</span>
              <span className="text-sm text-gray-500">{movie.release_date.split('-')[0]}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
    ))}
  </div>
  );
}