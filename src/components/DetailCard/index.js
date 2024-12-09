import CastSlider from "../CastSlider";

export default function DetailCard({ media, type }) {   
  const isMovie = type === 'movie';
  
  return (
    <div className="detail-card-wrapper">
      <div className="detail-card-container">
          <div className="detail-card-poster">
              <img 
                  src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} 
                  alt={isMovie ? "Movie Poster" : "Serie Poster"}
                  width={500}
                  height={750}
                  priority
              />
          </div>
          <div className="detail-card-details">
              <h2 className="detail-card-title">
                  {isMovie ? media.title : media.name}
              </h2>
              
              <div className="detail-card-metadata">
                  {media.origin_country.join(", ")} 
                  {' '}- <span>{media.vote_average.toFixed(1)}</span>/10 
              </div>

              <div className="detail-card-genres">
                  {media.genres.map((genre) => (
                      <span key={genre.id} className="detail-card-genre-tag">
                          {genre.name}
                      </span>
                  ))}
              </div>

              <ul className="detail-card-info-list">
                  <li>
                      <strong>
                          {isMovie ? 'Release Date' : 'First Air Date'}:
                      </strong>
                      {isMovie ? media.release_date : media.first_air_date}
                  </li>
                  {isMovie ? (
                      <li>
                          <strong>Movie Runtime:</strong>
                          {media.runtime} minutes
                      </li>
                  ) : (
                      <li>
                          <strong>Number of Seasons:</strong>
                          {media.number_of_seasons}
                      </li>
                  )}
              </ul>

              <h3 className="detail-card-overview-title">Overview</h3>
              <p className="detail-card-overview">{media.overview}</p>
          </div>
      </div>
    </div>
  );
}