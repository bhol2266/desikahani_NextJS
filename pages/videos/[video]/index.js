import React, { useContext } from 'react'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
    PencilAltIcon, EyeIcon, ChevronRightIcon, ScaleIcon, FolderIcon, TagIcon
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react'
import { BeatLoader } from 'react-spinners';
import { useRef } from 'react';
import VideoThumbnail from '../../../components/VideoThumbnail'
import videosContext from '../../../context/videos/videosContext'
import { setCookie, getCookie } from 'cookies-next';
import MultiformatAds from '../../../components/Ads/MultiFormatAds'
import Outstreams from '../../../components/Ads/Outstream'


function Story({ story_details,finalDataArray }) {


    const videoPlayerRef = useRef(null)

    const { MobileAppModalVisible, setMobileAppModalVisible } = useContext(videosContext);
    const [VideoErrorCounter, setVideoErrorCounter] = useState(0);

    useEffect(() => {

        if (typeof getCookie("AdSeenCounter") == "undefined") {
            setCookie("AdSeenCounter", 0)
        }

        setTimeout(() => {
            var AdSeenCounter = parseInt(getCookie("AdSeenCounter"));

            if (AdSeenCounter < 2) {
                setMobileAppModalVisible(true)
                console.log(AdSeenCounter + 1);
                setCookie("AdSeenCounter", AdSeenCounter + 1)
            }
        }, 60000);

    }, []);


    // var finalDataArray = []
    // for (let index = 1; index < 67; index++) {

    //     var data = require(`../../../JsonData/Videos/Videos_${index}.json`);
    //     data.forEach(obj => {
    //         finalDataArray.push(obj)
    //     })

    // }


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
        <div className="md:w-3/5 py-4   rounded-lg "  >
            <Head>
                <meta name="referrer" content="no-referrer" />
                <title>{`${video.replace('-', ' ')} `}</title>
                <meta name="description" content={story_details.description} />

            </Head>
            <div className='flex items-center justify-between'>

                <h1 className='text-[24px] sm:text-[27px] text-orange-800 font-inter px-2'>{story_details.Title}</h1>

            </div>


            <div className=' hover:brightness-75 group  relative shadow-2xl mb-4 xl:mb-8'>


                <video key={story_details.videoLink} ref={videoPlayerRef} poster={story_details.thumbnail} autoPlay className={`w-full aspect-video object-contain`} width="852" height="480 " controls >
                    <source onError={videoErrorHandling} src={story_details.videoLink} type="video/mp4" />

                </video>

            </div>






            <p className={`text-gray-800 font-hindi tracking-wide text-[14px] sm:text-[18px] px-2`} >{story_details.description}</p>


            <div className='my-2 px-2' >
                <div className='flex'>
                    <FolderIcon className='icon text-orange-700' />
                    <p>{story_details.category.title}</p>
                </div>
                <div className='flex'>
                    <TagIcon className='icon text-orange-700' />
                    <div className='flex flex-wrap space-x-1'>

                        {story_details.tagsArray.map(tag => {
                            return (
                                <Link key={tag} href={`/videos/tag/${tag.toLowerCase().replace(/ /g, "-")}`}>
                                    <p className='hover:text-red-800 cursor-pointer font-semibold underline rounded text-xs m- border-gray-500  ' >{tag}</p>
                                </Link>

                            )
                        })}
                    </div>
                </div>






                <p className='mt-4 mb-2  text-lg text-red-800 font-semibold px-2'>ऐसी ही कुछ और वीडियो</p>

                <div className='grid grid-cols-1 gap-6 md:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 px-2'
                >
                    {
                        finalDataArray.slice(0, 20).map(story => {
                            return (
                                <VideoThumbnail key={story.Title} story_details={story} />
                            )
                        })
                    }

                </div>

                <MultiformatAds />
                <Outstreams />





            </div>



        </div>
    )
}

export default Story


export async function getStaticPaths() {


    return {
        paths: [{
            params: {
                video: 'hot-up-bhabhi-ki-chudai'
            }
        }],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {

    const { video } = context.params


    const data = { video: video }
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
            story_details: resData.story_details,
            finalDataArray: resData.finalDataArray,
        }
    }


}
