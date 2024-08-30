export default async function Home() {
  const options = {method: 'GET', headers: {accept: 'application/json'}};

  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', options);
  const {results} = await response.json();

  return (
    <ul>
      {results.map((movie)=>{
        return <li key={movie.id}>
          <h2>{movie.title}</h2>
        </li>
      })}
    </ul>
  );
}