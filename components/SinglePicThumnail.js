import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import React, { useContext, useEffect, useState } from 'react'
import videosContext from '../context/videos/videosContext';


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





function SinglePicThumnail({ picURL, index }) {
    const { showCarousel, setshowCarausel, CarouselIndex, setCarouselIndex } = useContext(videosContext);



    return (
        <>
            <div onClick={() => { setshowCarausel(true); setCarouselIndex(index) }} key={picURL} className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer   rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-transparent`}>
                <img
                    loading="lazy"
                    alt={picURL}
                    src={picURL}
                    height={1080}
                    width={1920}
                ></img>
            </div>

        </>
    )
}
export default SinglePicThumnail;
