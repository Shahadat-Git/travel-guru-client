import React from 'react';
import { FaStar } from 'react-icons/fa';

const HotelCard = ({ hotel }) => {
    const { hotelName, hotelImg, facilities, kitchen, cancellationFexibility, rating, price } = hotel;
    return (
        <div className='mb-5 flex gap-7 items-center py-5'>
            <div>
                <img className='h-44 w-72' src={hotelImg} alt="" />
            </div>
            <div>
                <h3 className='text-lg font-semibold'>{hotelName}</h3>
                <p className='text-gray-400 mt-1'>{facilities}</p>
                <p className='text-gray-400 mt-1'>{kitchen}</p>
                <p className='text-gray-400 mt-1'>{cancellationFexibility}</p>
                <div className='flex gap-9'>
                    <p className='font-semibold flex items-center gap-2'> <FaStar className='text-warning'></FaStar> {rating.rating} ({rating.ratingCount})</p>
                    <p className='font-semibold'> {price}</p>
                </div>
            </div>
        </div>
    );
};

export default HotelCard;