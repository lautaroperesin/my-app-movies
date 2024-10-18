export default async function MovieDetail({params}){

    const { movieId } = params;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=9bc55808c3aabf92be422d07aefbe9c5`);
    const movie = await res.json();

    return (
        <div className='text-white'>
        <h1>{movie.title}</h1>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <div >
        <p>{movie.overview}</p>
        <p>Release date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
        </div>
    </div>
    );
}