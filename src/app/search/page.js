'use client';
import React from 'react';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import Link from 'next/link';


export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

    const handleSearch = async (query) => {
      setIsLoading(true);
      console.log('Buscando:', query);
      const res = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&api_key=9bc55808c3aabf92be422d07aefbe9c5&language=en-US`
      );
      const data = await res.json();
      setResults(data.results);
      setIsLoading(false);
      };

      //obtener url
      const getLink = (item) => {
        return item.media_type === 'movie' ? `/movies/${item.id}`
        : item.media_type === 'serie' ? `/series/${item.id}`
        : `movies/x/cast/${item.id}`;
      }
  
    return (
      <div className="search-container">
        <div className="search-input-container">
            <SearchBar onSearch={handleSearch} placeholder='Search movies, series or actors...'/>
        </div>

        {isLoading && <p>Loading...</p>}

      {!isLoading && results.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {results.map((result) => (
             <Link
             key={result.id}
             href={getLink(result)}
             className="bg-gray-800 p-4 rounded-md text-white hover:bg-gray-700 transition"
           >
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${result.poster_path || result.profile_path}`}
                alt={result.title || result.name}
                className="rounded-md"
              />
              <h3 className="text-lg font-semibold mt-2">
                {result.title || result.name}
              </h3>
              <p className="text-sm text-gray-400">
                {result.media_type.charAt(0).toUpperCase() + result.media_type.slice(1)}
              </p>
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}