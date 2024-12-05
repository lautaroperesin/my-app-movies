import Title from "../Title";

export default function DetailCard({ media, type}) {   
    const isMovie = type === 'movie';
    
    return (
      <div className="movie-container">
        <div className="movie-poster">
          <img 
            src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} 
            alt={isMovie ? "Movie Poster" : "TV Series Poster"}
          />
        </div>
        <div className="movie-details">
          <div className="details-header">
            <div className="dh-ls">
              <h2>{isMovie ? media.title : media.name}</h2>
            </div>
          </div>
          <span className="italics-text">
            <i>
              {media.origin_country.join(", ")} 
              ---- Rating - <span>{media.vote_average}</span>/10 
            </i>
          </span>
          <ul className="details-ul">
            <li>
              <strong>Genres: </strong>
              {media.genres.map((genre) => genre.name).join(", ")}
            </li>
            <li>
              <strong>{isMovie ? 'Release Date' : 'First Air Date'}: </strong>
              {isMovie ? media.release_date : media.first_air_date}
            </li>
            {isMovie ? (
              <li>
                <strong>Movie Runtime: </strong>
                {media.runtime} minutes
              </li>
            ) : (
              <li>
                <strong>Number of Seasons: </strong>
                {media.number_of_seasons}
              </li>
            )}
          </ul>
          <p className="movie-overview">{media.overview}</p>
        </div>
      </div>
    );
  }