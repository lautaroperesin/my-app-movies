import Title from "../Title";

export default function MovieDetailCard({ movie }) {
  return (
    <>
    <div class="movie-container">
    <div class="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Movie Poster"/>
    </div>
    <div class="movie-details">
        <div class="details-header">
            <div class="dh-ls">
                <h2>{movie.title}</h2>
            </div>
        </div>
        <span class="italics-text"><i>{movie.release_date} --- {movie.origin_country} ---- Rating - <span>{movie.vote_average}</span>/10 </i></span>
       {/*  <ul class="details-ul">
            <li><strong>Actors: </strong>${data.Actors}</li>
            <li><strong>Director: </strong>${data.Director}</li>
            <li><strong>Writers: </strong>${data.Writer}</li>
        </ul> */}
        <ul class="details-ul">
            <li><strong>Genres: </strong>{movie.genres.map((genre) => genre.name).join(", ")}</li>
            <li><strong>Release Date: </strong>{movie.release_date}</li>
            <li><strong>Movie Runtime: </strong>{movie.runtime}</li>
        </ul>
        <p className="movie-overview">{movie.overview}</p>
    </div>
</div>
    </>
  );
}

{/* <div className="container">
<Title>MOVIE DETAILS</Title>
<div>
  <h1>{movie.title}</h1>
  <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
  />
  <div>
    <p>{movie.overview}</p>
    <p>Release date: {movie.release_date}</p>
    <p>Rating: {movie.vote_average}</p>
    <p>
      Genres: {movie.genres.map((genre) => genre.name).join(", ")}
    </p>
    <p>Country: {movie.origin_country}</p>
  </div>
</div>
</div> */}