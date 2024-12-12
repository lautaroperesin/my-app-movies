import { useState } from 'react';

export default function SearchBar({ onSearch, placeholder = "Search..." }){
    const [query, setQuery] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      onSearch(query);
      setQuery('');
    };
  
    return (
      <div className='mt-8'>
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto relative">
        <div className="relative">
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:border-transparent transition-all duration-300 text-gray-700"/>
          <button type="submit" className='absolute h-full right-0 top-0 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300'>
            Search
          </button>
        </div>
      </form>
      </div>
    );
  };