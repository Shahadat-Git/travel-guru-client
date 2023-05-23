import React, { useContext, useEffect, useRef, useState } from 'react';
// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import { DataContext } from '../../providers/DataProvider';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [currentLocation, setCurrentLocation] = useState(null)
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { locations } = useContext(DataContext);

    useEffect(() => {
        // console.log(slideIndex)
        if (slideIndex == 4) {
            setSlideIndex(0)
        }
        else if (slideIndex == 5) {
            setSlideIndex(1)
        }
        else if (slideIndex == 6) {
            setSlideIndex(2)
        }
        else if (slideIndex == 7) {
            setSlideIndex(3)
        }
        const activeItem = locations && locations.find((loctaion, index) => index.toString() === slideIndex.toString())
        setCurrentLocation(activeItem)
    }, [locations, slideIndex])


    return (
        <>
            <div className='flex flex-col-reverse md:flex-row'>
                <div className='md:w-5/12 mt-5'>
                    <h1 className='text-4xl lg:text-7xl font-bold uppercase'>{currentLocation?.name}</h1>
                    <p className='my-5'>{currentLocation?.description.slice(0, 200)}....</p>
                    <Link to={`/booking/${currentLocation?.id}`} className='btn btn-warning gap-2'>Booking  <FaArrowRight></FaArrowRight></Link>
                </div>
                <div className='md:ml-auto md:w-3/6'>
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Autoplay, Pagination, A11y]}
                        spaceBetween={100}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        grabCursor={true}
                        // centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: true,
                        }}
                        slidesPerView={3}
                        loop={true}
                        // onSlideChange={(swiper) => console.log(swiper.realIndex, 'slide change')}
                        onSlideChange={(swiper) => setSlideIndex(swiper.realIndex)}

                    >
                        {
                            locations && locations.map(location => <SwiperSlide location={location} key={location.id}>
                                {({ isActive }) => (

                                    <div style={{
                                        background: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${location.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain, cover',
                                        backgroundPosition: 'center'
                                    }} className={isActive ? 'border-4 border-[#FBBC04] h-[216px] lg:h-[416px] w-[130px] lg:w-[270px]  rounded-3xl' : 'h-[216px] lg:h-[416px] w-[130px] lg:w-[270px]  rounded-3xl'}>
                                        <h3 className='text-base md:text-3xl font-bold uppercase absolute bottom-6 left-4'>{location.name}</h3>
                                    </div>
                                )}
                            </SwiperSlide>)
                        }
                        {
                            locations && locations.map(location => <SwiperSlide location={location} key={location.id}>
                                {({ isActive }) => (

                                    <div style={{
                                        background: `linear-gradient(rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9)), url(${location.img})`, backgroundRepeat: 'no-repeat', backgroundSize: 'contain, cover',
                                        backgroundPosition: 'center'
                                    }} className={isActive ? 'border-4 border-[#FBBC04] h-[216px] lg:h-[416px] w-[130px] lg:w-[270px]  rounded-3xl' : 'h-[216px] lg:h-[416px] w-[130px] lg:w-[270px]  rounded-3xl'}>
                                        <h3 className='text-base md:text-3xl font-bold uppercase absolute bottom-6 left-4'>{location.name}</h3>
                                    </div>
                                )}
                            </SwiperSlide>)
                        }
                    </Swiper >
                </div>
            </div >
            <div className='flex justify-center gap-3 mt-20'>
                <button className='btn bg-white text-black rounded-full hover:bg-gray-200 ' ref={prevRef}><MdKeyboardArrowLeft /></button>
                <button className='btn  bg-white text-black rounded-full hover:bg-gray-200 ' ref={nextRef}><MdKeyboardArrowRight /></button>
            </div>
        </>

    );
};

export default Slider;