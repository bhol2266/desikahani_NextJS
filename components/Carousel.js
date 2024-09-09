import React, { useContext, useState, useEffect } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

import videosContext from '../context/videos/videosContext';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';

const Carousel = ({ imageUrls }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

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
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`${showCarousel ? "fixed" : "hidden"}  inset-0 flex items-center justify-center bg-black bg-opacity-90 select-none`} data-carousel="slide">


            <IoIosCloseCircleOutline onClick={() => { setshowCarausel(false) }} className="cursor-pointer absolute z-50 text-white text-[50px] lg:text-[70px] right-4 top-4 lg:top-8 lg:right-8 p-1" />

            {/* Carousel wrapper */}
            <div className="w-full">
                {imageUrls.map((image, index) => (
                    <div key={index} className={`${index === currentIndex ? 'block' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
                        <img
                            src={image}
                            className="rounded-lg w-screen h-screen object-contain"
                            alt={`Slide ${index + 1}`}
                        />
                    </div>
                ))}
            </div>

            {/* Slider indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                {imageUrls.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-gray-800' : 'bg-gray-300'}`}
                        aria-current={index === currentIndex}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => handleIndicatorClick(index)}
                        data-carousel-slide-to={index}
                    />
                ))}
            </div>

            {/* Slider controls */}
            <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handlePrev}
                data-carousel-prev
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <ChevronLeftIcon className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" />
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={handleNext}
                data-carousel-next
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <ChevronRightIcon className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" />
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
