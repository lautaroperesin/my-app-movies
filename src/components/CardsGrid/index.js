import Link from 'next/link';

export default function CardsGrid({ media, type }) {
  const isMovie = type === 'movie';

  const getLink = (item) => {
    return isMovie ? `/movies/${item.id}` : `/series/${item.id}`;
  }

  const getReleaseDate = (item) => {
    return isMovie ? item.release_date : item.first_air_date;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {media.map((item) => (
      <div key={item.id} className="bg-black rounded shadow overflow-hidden hover:shadow transition-shadow transform transition-transform duration-300 hover:scale-105">
      <Link href={getLink(item)}>
        <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.title || item.name}
              className="w-full h-full object-cover"
            />
          <div className="p-3">
            <h3 className="font-semibold text-lg text-white">{item.title || item.name}</h3>
            <div className="flex items-center justify-between mt-2">
              <span className="text-yellow-500">★ {item.vote_average.toFixed(1)}</span>
              <span className="text-sm text-gray-500">{getReleaseDate(item).split('-')[0]}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
    ))}
  </div>
  );
}