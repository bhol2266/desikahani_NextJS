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





function SinglePicThumnail({ picData, index, href }) {



    const [src, setsrc] = useState(picData);



//     function fetchImageURLfirebase() {
//         const location = JSON.parse(localStorage.getItem("location"))
//             const app = initializeApp(firebaseConfig);
//             const storage = getStorage(app);

//             getDownloadURL(ref(storage, `picsModel/${href}/${index + 1}.png`))
//                 .then((url) => {
//                     setsrc(url)
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 });
        
//     }
//     useEffect(() => {
//         fetchImageURLfirebase()
//     }, []);



    return (
        <>
            <div key={picData} className={` mb-2 animate-fade flex   flex-col justify-center  cursor-pointer  shadow-md  border-2 rounded-lg overflow-hidden	 md:hover:scale-105 transform transition duration-150 bg-white`}>
                <a target="_self" href={picData}>
                    <img
                        loading="lazy"
                        alt={"image"}
                        src={"asdfsadfsadfds"}
                        height={1080}
                        width={1920}
                    ></img>
                </a>
            </div>

        </>
    )
}
export default SinglePicThumnail;
