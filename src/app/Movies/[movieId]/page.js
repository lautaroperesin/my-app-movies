/* export default function MovieDetail(params){

    const { moveId } = params;

    return (
        <h1 className="text-white">Movie details</h1>
    );
} */
    async function getMovie(id) {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=9bc55808c3aabf92be422d07aefbe9c5&append_to_response=credits`,
          { next: { revalidate: 60 * 60 * 24 } } // Revalidate every 24 hours
        )
      
        return res.json()
      }

    export default async function MoviePage(params) {
        const {movieId} = params;
        const movie = await getMovie(movieId);
      
        return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    width={500}
                    height={750}
                    className="rounded-lg"
                />
                </div>
                <div className="md:w-2/3">
                  <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
                  <p className="text-lg mb-4">{movie.overview}</p>
                  <div className="mb-4">
                    <h2 className="text-2xl font-semibold mb-2">Details</h2>
                    <p><strong>Release Date:</strong> {movie.release_date}</p>
                    <p><strong>Runtime:</strong> {movie.runtime} minutes</p>
                    <p><strong>Rating:</strong> {movie.vote_average }/10</p>
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold mb-2">Cast</h2>
                    <div className="flex flex-wrap gap-4">
                      {movie.credits.cast.slice(0, 5).map((actor) => (
                        <div key={actor.id} className="text-center">
                          <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                            width={100}
                            height={150}
                            className="rounded-lg"
                          />
                          <p className="mt-2 text-sm">{actor.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }