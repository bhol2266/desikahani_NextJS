import 'firebase/storage';
import Link from 'next/link';
import React, { useState } from 'react';
import PopunderAds from './Ads/Popunder';
import Outstreams from './Ads/Outstream';
import BannerAds from './Ads/BannerAds';


// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqjCkKYZSOnpXpWxtgp1yxEIv8WxkaZTo",
    authDomain: "desikahaninextjs-ffab3.firebaseapp.com",
    projectId: "desikahaninextjs-ffab3",
    storageBucket: "desikahaninextjs-ffab3.appspot.com",
    messagingSenderId: "21881549608",
    appId: "1:21881549608:web:b0bfec2a195101cd2b161d",
    measurementId: "G-3YK1YFJBV1"
};


function PicsThumbnail({ data }) {

    var monthArray = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];


    const url = data.fullalbum_href;
    const parts = url.split('/');
    const href = parts[parts.length - 2];
    // console.log(href);

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
                        src={data.thumbnail}

                    ></img>
                    <h1 className='text-xs lg:text-sm p-1 font-bold font-inter'>{data.title}</h1>
                    {/* <p className='text-xs lg:text-sm p-1 font-poppins'>{data.date.day + "-" + monthArray[data.date.month - 1] + "-" + data.date.year}</p> */}

                </Link>

            </div>

        </div>
    )
}

export default PicsThumbnail
