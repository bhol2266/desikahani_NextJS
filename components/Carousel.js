import React, { useContext, useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

import videosContext from '../context/videos/videosContext';

const Carousel = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showThumbnails, setShowThumbnails] = useState(false);

    // Get context values
    const { showCarousel, setshowCarausel, CarouselIndex } = useContext(videosContext);

    // Update currentIndex when CarouselIndex from context changes
    useEffect(() => {
        if (CarouselIndex >= 0 && CarouselIndex < imageUrls.length) {
            setCurrentIndex(CarouselIndex);
        }
    }, [CarouselIndex, imageUrls.length]);



    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1
        );
        setShowThumbnails(true); // Show thumbnails when navigating
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
        setShowThumbnails(true); // Show thumbnails when navigating
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
        setShowThumbnails(true);
    };

    return (
        <div className={`${showCarousel ? "fixed" : "hidden"} inset-0 flex items-center justify-center bg-black bg-opacity-90 select-none`} data-carousel="slide">
            <div className='absolute right-4 top-4 lg:top-8 lg:right-8 p-1 z-50 rounded-full bg-black bg-opacity-50 flex justify-center items-center'>
                <IoIosCloseCircleOutline onClick={() => { setshowCarausel(false) }} className="cursor-pointer  text-white text-[50px] lg:text-[70px] " />
            </div>

            {/* Carousel wrapper */}
            <div className="relative w-full">
                {imageUrls.map((image, index) => (
                    <div key={index} className={`${index === currentIndex ? 'block' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
                        <img
                            src={image}
                            className="rounded-lg w-screen h-screen object-contain"
                            alt={`Slide ${index + 1}`}
                            onClick={() => setShowThumbnails(!showThumbnails)}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div
                className={`absolute z-30 flex left-1/2 -translate-x-1/2 bottom-5 space-x-2 transition-opacity duration-300 w-full ${showThumbnails ? 'opacity-100' : 'opacity-0'}`}
            >
                <div className='flex space-x-1 items-center justify-center w-full overflow-x-auto scrollbar-hide'>
                    {imageUrls.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`h-16 w-12 object-cover rounded-lg cursor-pointer transition-transform duration-300 ${index === currentIndex ? 'border-2 border-white scale-125' : ''}`}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleIndicatorClick(index)}
                            aria-label={`Thumbnail ${index + 1}`}
                        />
                    ))}
                </div>
            </div>


            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
                data-carousel-prev
            >
                <div className='h-10 w-10 rounded-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <ChevronLeftIcon className="w-4 h-4 text-white " aria-hidden="true" />
                </div>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
                data-carousel-next
            >
                <div className='h-10 w-10 rounded-full bg-black bg-opacity-50 flex justify-center items-center'>
                    <ChevronRightIcon className="w-4 h-4 text-white " aria-hidden="true" />
                </div>
            </button>
        </div>
    );
};

export default Carousel;
