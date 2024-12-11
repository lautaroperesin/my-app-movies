'use client';
import { useEffect, useState } from 'react';
import { getTopRatedSeries, getOnTheAirSeries } from '@/utils/fetch-data';
import Slider from '@/components/Slider';
import CardsGrid from '@/components/CardsGrid';

export default function Series(){
    const [onTheAirSeries, setOnTheAirSeries] = useState([]);
    const [topRatedSeries, setTopRatedSeries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSeries = async () => {
        try {
            const onTheAirResponse = await getOnTheAirSeries();
            setOnTheAirSeries(onTheAirResponse);

            const topRatedSeriesResponse = await getTopRatedSeries();
            setTopRatedSeries(topRatedSeriesResponse);

            setLoading(false);
        } catch (error) {
            console.error('Error fetching TV series:', error);
            setLoading(false);
        }
        };

        fetchSeries();
    }, []);

    if (loading) {
        return <div className="text-center text-2xl mt-10 text-white">Loading series...</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8 text-white">

        {/* On The Air Series */}
        <h1 className="text-2xl font-bold mb-4">ON THE AIR SERIES</h1>
        <Slider media={onTheAirSeries} type='serie'/>

        {/* Airing Today Section */}
        <h2 className="text-2xl font-bold mb-4">TOP RATED</h2>
        <CardsGrid media={topRatedSeries} type='serie'/>
        </div>
    );
}