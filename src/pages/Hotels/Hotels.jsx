import React, { useContext } from 'react';
import Header1 from '../../shared/Header1';
import { useLoaderData, useParams } from 'react-router-dom';
import { DataContext } from '../../providers/DataProvider';
import HotelCard from './HotelCard';
import { Map, Marker, ZoomControl } from "pigeon-maps"
import { maptiler } from 'pigeon-maps/providers'

const maptilerProvider = maptiler('MY_API_KEY', 'streets')


const Hotels = () => {
    const hotels = useLoaderData();
    const { id } = useParams();
    const { locations } = useContext(DataContext);

    const currentLocation = locations?.find(location => location.id == id);


    const MAPTILER_ACCESS_TOKEN = 'YATwlqQCWacARIiggGdk'
    const MAP_ID = 'basic-v2'
    const mapTiler = (x, y, z, dpr) => {
        return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${dpr >= 2 ? '@2x' : ''}.png?key=${MAPTILER_ACCESS_TOKEN}`
    }

    return (
        <div className='container mx-auto'>
            <Header1></Header1>
            <hr className='mb-5' />
            <div>
                <p className='text-gray-400'>252 stays Apr 13-17 3 guests</p>
                <div className='lg:flex p-1'>
                    <div className='lg:w-5/12'>
                        <h3 className='text-2xl font-bold'>Stay in {currentLocation?.name}</h3>
                        {
                            hotels.map((hotel, idx) => <HotelCard
                                key={idx}
                                hotel={hotel}
                            ></HotelCard>)
                        }
                    </div>
                    <div className='lg:w-6/12 w-full lg:ml-auto px-1 rounded'>
                        <Map provider={mapTiler}
                            dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
                            height={700}

                            defaultCenter={[23.7766, 90.3877]}
                            defaultZoom={11}>
                            <ZoomControl />
                        </Map>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hotels;