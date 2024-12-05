'use client';
import { useEffect, useState } from 'react';

export default function Series(){
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);
    const [airingTodaySeries, setAiringTodaySeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
        try {
            const onTheAirResponse = await fetch(
            `https://api.themoviedb.org/3/tv/on_the_air?api_key=9bc55808c3aabf92be422d07aefbe9c5`
            );
            const onTheAirData = await onTheAirResponse.json();
            setOnTheAirSeries(onTheAirData.results);

            const airingTodayResponse = await fetch(
            `https://api.themoviedb.org/3/tv/airing_today?api_key=9bc55808c3aabf92be422d07aefbe9c5`
            );
            const airingTodayData = await airingTodayResponse.json();
            setAiringTodaySeries(airingTodayData.results);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching TV series:', error);
            setLoading(false);
        }
        };

        fetchSeries();
    }, []);

    if (loading) {
        return <div className="text-center text-2xl mt-10">Cargando series...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">ON THE AIR SERIES</h1>

        {/* On The Air Series - Large First Card */}
        {onTheAirSeries.length > 0 && (
            <div className="w-full mb-8">
            <div className="relative w-full h-[500px] overflow-hidden rounded-lg shadow-lg">
                <img
                src= {`https://image.tmdb.org/t/p/w500${onTheAirSeries[0].poster_path}`}
                alt={onTheAirSeries[0].name}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                <h2 className="text-2xl font-bold">{onTheAirSeries[0].name}</h2>
                <p className="text-sm">{onTheAirSeries[0].overview}</p>
                </div>
            </div>
            </div>
        )}

        {/* On The Air Series Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {onTheAirSeries.slice(1, 5).map((serie) => (
            <div 
                key={serie.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
                <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                width={500}
                height={750}
                className="w-full h-auto object-cover"
                />
                <div className="p-3">
                <h3 className="font-semibold text-lg">{serie.name}</h3>
                <p className="text-sm text-gray-600">
                    Rated: {serie.vote_average}
                </p>
                </div>
            </div>
            ))}
        </div>

        {/* Airing Today Section */}
        <h2 className="text-2xl font-bold mb-4">AIRING TODAY</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {airingTodaySeries.slice(0, 4).map((serie) => (
            <div 
                key={serie.id} 
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
                <img
                src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                alt={serie.name}
                width={500}
                height={750}
                className="w-full h-auto object-cover"
                />
                <div className="p-3">
                <h3 className="font-semibold text-lg">{serie.name}</h3>
                <p className="text-sm text-gray-600">
                    Rated: {serie.vote_average}
                </p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
}