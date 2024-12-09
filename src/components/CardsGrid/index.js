import Link from 'next/link';

export default function CardsGrid({ media, type }) {
  const isMovie = type === 'movie';

  const getTitle = (item) => {
    return isMovie ? item.title : item.name;
  }

  const getLink = (item) => {
    return isMovie ? `/movies/${item.id}` : `/series/${item.id}`;
  }

  const getReleaseDate = (item) => {
    return isMovie ? item.release_date : item.first_air_date;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
    {media.map((item) => (
      <div className="bg-black rounded shadow overflow-hidden hover:shadow transition-shadow group transform transition-transform duration-300 group-hover:scale-105">
      <Link href={getLink(item)} key={item.id}>
        <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={getTitle(item)}
              className="w-full h-full object-cover"
            />
          <div className="p-3">
            <h3 className="font-semibold text-lg line-clamp-2 text-white">{getTitle(item)}</h3>
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