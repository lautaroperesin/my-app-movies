export function GetOptions(){
    const options = {method: 'GET', headers: {accept: 'application/json'}};
    return options;
}

export async function GetNowPlayingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', GetOptions);
    const {results} = await response.json();
    return results;
}

export async function GetPopularMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', GetOptions);
    const {results} = await response.json();
    return results;
}

export async function GetTopRatedMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', GetOptions);
    const {results} = await response.json();
    return results;
}