import 'firebase/storage';
import Link from 'next/link';
import React, { useState } from 'react';
import BannerAds from './Ads/BannerAds';
import PopunderAds from './Ads/Popunder';



function PicsThumbnail({ data }) {

    var monthArray = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];


    const url = data.fullalbum_href;
    const parts = url.split('/');
    const href = parts[parts.length - 2];

    const [imageSrc, setImageSrc] = useState(data.thumbnail);


    const handleImageError = async () => {
        try {
            // Send a POST request with the image URL in the request body
            const response = await fetch('/api/getImageData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: data.thumbnail }),
            });

            // Check if the response is OK
            if (!response.ok) {
                throw new Error('Failed to fetch image data');
            }

            // Parse the JSON response to get the base64-encoded string
            const dataa = await response.json();
            const base64Image = dataa.base64;
            console.log(base64Image);

            // Update the image source
            setImageSrc(base64Image);
        } catch (error) {
            console.error('Error fetching image data:', error);
            // Optionally handle the error (e.g., show a placeholder image)
            setImageSrc('/path/to/placeholder-image.jpg'); // Fallback placeholder image
        }
    };









    return (
        <div>
            <PopunderAds />
            <BannerAds />
            <div className={`animate-fade flex flex-col justify-center rounded-lg md:hover:scale-105 transform transition duration-150 bg-white`}>

                <Link href={`/photo/${href}`}>

                    <img
                        className='object-contain '
                        loading="lazy"
                        alt={data.Title}
                        src={imageSrc}
                        onError={handleImageError} // Call this function if the image fails to load


                    ></img>
                    <h1 className='text-xs lg:text-sm p-1 font-bold font-inter'>{data.title}</h1>
                    {/* <p className='text-xs lg:text-sm p-1 font-poppins'>{data.date.day + "-" + monthArray[data.date.month - 1] + "-" + data.date.year}</p> */}

                </Link>

            </div>

        </div>
    )
}

export default PicsThumbnail
