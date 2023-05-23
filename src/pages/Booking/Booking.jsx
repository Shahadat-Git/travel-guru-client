import React, { useContext, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { DataContext } from '../../providers/DataProvider';
import { enGB } from 'date-fns/locale'
import { DateRangePicker, START_DATE, END_DATE } from '@bjarkehs/react-nice-dates'
import '@bjarkehs/react-nice-dates/build/style.css'
import './Booking.css'

const Booking = () => {
    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()
    const { id } = useParams();
    const { locations } = useContext(DataContext);

    const currentLocation = locations?.find(location => location.id == id)
    // console.log(currentLocation)
    const navigate = useNavigate();
    const handleBooking = event => {
        event.preventDefault();
        navigate(`/hotel-booking/${currentLocation?.id}`)
    }

    return (
        <div className='container mx-auto mt-20 flex'>
            <div className='w-5/12 mt-5 text-white'>
                <h1 className='text-7xl font-bold uppercase'>{currentLocation?.name}</h1>
                <p className='my-5'>{currentLocation?.description}</p>
            </div>
            <div className='w-5/12 mt-5 ms-auto'>
                <form onSubmit={handleBooking} className='border w-2/3 bg-white p-5 rounded-lg'>
                    <label className='text-gray-400'> Origin</label>
                    <input required className='block w-full bg-gray-100 placeholder-black h-12 pl-5 rounded focus:outline-none text-xl font-semibold' type="text" placeholder='From' />
                    <label className='text-gray-400 block mt-2'> Destination</label>
                    <input required className='block w-full bg-gray-100 placeholder-black h-12 pl-5 rounded focus:outline-none text-xl font-semibold' type="text" defaultValue={currentLocation?.name} placeholder='To' />
                    <DateRangePicker
                        startDate={startDate}
                        endDate={endDate}
                        onStartDateChange={setStartDate}
                        onEndDateChange={setEndDate}
                        minimumDate={new Date()}
                        minimumLength={1}
                        format='dd MMM yyyy'
                        locale={enGB}
                    >
                        {({ startDateInputProps, endDateInputProps, focus }) => (
                            <div className='flex gap-3 mt-2'>
                                <div>
                                    <label className='text-gray-400'> From</label>
                                    <input required
                                        className={'block w-full bg-gray-100 placeholder-black h-12 pl-5 rounded focus:outline-none text-xl font-semibold' + 'input' + (focus === START_DATE ? ' -focused' : '')}
                                        {...startDateInputProps}
                                        placeholder='Start date'
                                    />
                                </div>

                                <div>
                                    <label className='text-gray-400'> To</label>
                                    <input required
                                        className={'block w-full bg-gray-100 placeholder-black h-12 pl-5 rounded focus:outline-none text-xl font-semibold' + 'input' + (focus === END_DATE ? ' -focused' : '')}
                                        {...endDateInputProps}
                                        placeholder='End date'
                                    />
                                </div>
                            </div>
                        )}
                    </DateRangePicker>
                    <button className='btn btn-warning w-full mt-6'>Start Booking</button>
                </form>
            </div>
        </div>
    );
};

export default Booking;