import React, { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import { Banner, Outstream } from "exoclick-react";
import Link from 'next/link'
import PopunderAds from './Ads/Popunder';
import { initializeApp } from 'firebase/app';
import 'firebase/storage';
import { getStorage, ref, getDownloadURL } from "firebase/storage";


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

    const [src, setsrc] = useState(data.thumbnail);




//     function fetchImageURLfirebase() {
//         const location = JSON.parse(localStorage.getItem("location"))
//         const app = initializeApp(firebaseConfig);
//         const storage = getStorage(app);
//         getDownloadURL(ref(storage, `picsItemModel/${data.fullalbum_href
//             }/thumbnail.png`))
//             .then((url) => {
//                 setsrc(url)
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     }

//     useEffect(() => {
//         fetchImageURLfirebase()
//     }, []);

    return (
        <div>
            <PopunderAds />
            <div className={`animate-fade flex flex-col justify-center rounded-lg md:hover:scale-105 transform transition duration-150 bg-white`}>

                <Link href={`/photo/${data.fullalbum_href}`}>

                    <img
                        className='object-contain '
                        loading="lazy"
                        alt={data.Title}
                        src={"asdfsadfsadfds"}

                    ></img>
                    <h1 className='text-xs lg:text-sm p-1 font-bold font-inter'>{data.Title}</h1>
                    <p className='text-xs lg:text-sm p-1 font-poppins'>{data.date.day + "-" + monthArray[data.date.month - 1] + "-" + data.date.year}</p>

                </Link>

            </div>

        </div>
    )
}

export default PicsThumbnail
