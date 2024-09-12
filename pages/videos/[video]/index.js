import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'

import {
    TagIcon,
    VideoCameraIcon
} from '@heroicons/react/solid'
import { getCookie, setCookie } from 'cookies-next'
import { useRef } from 'react'
import { BeatLoader } from 'react-spinners'
import Outstreams from '../../../components/Ads/Outstream'
import Videos from '../../../components/Videos'
import videosContext from '../../../context/videos/videosContext'
import DisqusComments from '../../../components/DisqusComments'
import Script from 'next/script'


function Video({ video_details, relatetdVideos }) {


    const videoPlayerRef = useRef(null)

    const [VideoErrorCounter, setVideoErrorCounter] = useState(0);



    const router = useRouter();
    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={25} color={'orange'} />
            </div>
        )
    }

    const { video } = router.query;


    const videoErrorHandling = () => {
        console.log("Video Src Error  ", VideoErrorCounter);
        setVideoErrorCounter(VideoErrorCounter + 1)
        if (VideoErrorCounter > 2) {
            return
        }
        videoPlayerRef.current.load();
        videoPlayerRef.current.play();
    }

    return (
        <div className="  py-2   rounded-lg "  >
            <Head>
                <meta name="referrer" content="no-referrer" />
                <title>{`${video.replace('-', ' ')} `}</title>
                <meta name="description" content={"video_details.description"} />

            </Head>
            <div className='flex items-center justify-between'>

                <h1 className='text-[18px] sm:text-[27px] text-orange-800 font-inter px-2'>{video_details.title}</h1>

            </div>


            <Script
                src="//imasdk.googleapis.com/js/sdkloader/ima3.js"
                onLoad={() => {
                    const script = document.createElement("script");
                    script.src = "/vastAd.js";
                    document.body.appendChild(script);
                }}
            />


            <div className=' hover:brightness-75 group  relative mb-4 xl:mb-8 '>

                <div id="mainContainer" className={`relative w-full aspect-video object-contain  group  shadow-2xl sm:ml-2 lg:ml-4  mb-2`}>

                    <video id="contentElement" key={video_details.videoSrc} ref={videoPlayerRef} poster={video_details.thumbnail} autoPlay className={`w-full aspect-video object-contain`} width="852" height="480 " controls >
                        <source onError={videoErrorHandling} src={video_details.videoSrc} type="video/mp4" />

                    </video>

                    <div className={`absolute top-0 left-0 `} id="adContainer"></div>
                    <button className="hidden" id="playButton">Play</button>


                </div>


                <div className='flex'>
                    <VideoCameraIcon className='icon text-orange-700' />
                    <p>{video_details.title}</p>
                </div>
                <div className='flex'>
                    <TagIcon className='icon text-orange-700' />
                    <div className='flex flex-wrap space-x-1'>

                        {video_details.tags.map(tag => {
                            return (
                                <Link key={tag} href={`/videos/tag/${tag.replace(/ /g, "-")}`}>
                                    <p className='hover:text-red-800 cursor-pointer font-semibold underline rounded text-xs m- border-gray-500  ' >{tag}</p>
                                </Link>

                            )
                        })}
                    </div>
                </div>




            </div>








            <div className='my-2 px-2' >




                <p className='mt-4 mb-2  text-lg text-red-800 font-semibold px-2'>ऐसी ही कुछ और वीडियो</p>

                < Videos finalDataArray={relatetdVideos} />

                <DisqusComments data={{ identifier: video_details.id, title: video_details.title }} />


                <div className='sm:flex items-center justify-center sm:w-1/2 lg:w-1/4 mx-auto mt-4'>
                    <Outstreams />
                    <Outstreams />
                    <Outstreams />
                </div>

            </div>



        </div>
    )
}

export default Video


export async function getStaticPaths() {


    return {
        paths: [{
            params: {
                video: 'dever-fuck-me-in-the-car-with-hindi-dirty-talk-after-seeing-me-with-my-boyfriend-in-hotel'
            }
        }],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {

    const { video } = context.params


    const data = { id: video }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}videoPageData`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    const resData = await rawResponse.json();
    return {
        props: {
            video_details: resData.video_details,
            relatetdVideos: resData.relatetdVideos,
        }
    }


}
