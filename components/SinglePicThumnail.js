import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";

import React, { useEffect, useState } from 'react'


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



    return (
        <>
            <div key={picURL} className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer  shadow-md  border-2 rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-white`}>
                <a target="_self" href={picURL}>
                    <img
                        loading="lazy"
                        alt={picURL}
                        src={picURL}
                        height={1080}
                        width={1920}
                    ></img>
                </a>
            </div>

        </>
    )
}
export default SinglePicThumnail;
