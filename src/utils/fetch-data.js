const getAuthOptions = ()=> {
    return {method: 'GET', headers: {accept: 'application/json'}};
}

export async function getNowPlayingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getPopularMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getTopRatedMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getUpcomingMovies(){
    const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getPopularSeries(){
    const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getTopRatedSeries(){
    const response = await fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getOnTheAirSeries(){
    const response = await fetch('https://api.themoviedb.org/3/tv/on_the_air?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getAiringTodaySeries(){
    const response = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5', getAuthOptions());
    const {results} = await response.json();
    return results;
}

export async function getDetails(id, type){
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}?language=en-US&api_key=9bc55808c3aabf92be422d07aefbe9c5`, getAuthOptions());
    return await response.json();
}

export async function getCredits(id, type){
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/credits?language=en-US&api_key=9bc55808c3aabf92be422d07aefbe9c5`, getAuthOptions());
    return await response.json();
}

export async function getReviews(id, type){
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/reviews?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5`, getAuthOptions());
    return await response.json();
}

export async function getSimilarTitles(id, type){
    const response = await fetch(`https://api.themoviedb.org/3/${type}/${id}/similar?language=en-US&page=1&api_key=9bc55808c3aabf92be422d07aefbe9c5`, getAuthOptions());
    return await response.json();
}

export async function getActorCredits(id){
    const response = await fetch(`https://api.themoviedb.org/3/person/${id}/combined_credits?language=en-US&api_key=9bc55808c3aabf92be422d07aefbe9c5`, getAuthOptions());
    return await response.json();
}