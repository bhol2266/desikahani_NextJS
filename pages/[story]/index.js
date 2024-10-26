import React, { useRef, useEffect, useState, Fragment } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { ChevronRightIcon, EyeIcon, FolderIcon, PencilAltIcon, TagIcon } from '@heroicons/react/solid';
import { BeatLoader } from 'react-spinners';
import BannerAds from '../../components/Ads/BannerAds';
import Outstreams from '../../components/Ads/Outstream';
import DisqusComments from '../../components/DisqusComments';
import { BannedUrls } from '../../JsonData/BannedUrls';

function Story({ story_details }) {
    const router = useRouter();
    const videoPlayerRef = useRef(null);
    const [videoErrorCounter, setVideoErrorCounter] = useState(0);
    const [storyRemoved, setStoryRemoved] = useState(false);
    const [textSize, setTextSize] = useState('20px');
    const [storyArray, setStoryArray] = useState(story_details.newStoryArray);
    const [title, setTitle] = useState(story_details.newTitle);


    const [language, setLanguage] = useState("english");

    const { story, story_Category } = router.query;

    useEffect(() => {
        const currentUrl = window.location.href;
        setStoryRemoved(BannedUrls.includes(currentUrl));
    }, [router.query]);



    const filter = [
        { sizeName: 'Small', sizecode: '15px' },
        { sizeName: 'Medium', sizecode: '20px' },
        { sizeName: 'Large', sizecode: '25px' },
        { sizeName: 'XL', sizecode: '30px' },
        { sizeName: '2XL', sizecode: '35px' },
        { sizeName: '3XL', sizecode: '40px' }
    ];

    const capitalizeWords = (str) => str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const handleLanguageToggle = () => {
        if (language === "english") {
            setTitle(story_details.Title);
            setStoryArray(story_details.description);
            setLanguage("hindi");
        } else {
            setTitle(story_details.newTitle);
            setStoryArray(story_details.newStoryArray);
            setLanguage("english");
        }
    };

    const textSizeChangerOnclick = (sizeCode) => {
        setTextSize(sizeCode);
    };

    const checkAudioDuration = async () => {
        const audioPlayer = videoPlayerRef.current;
        if (!audioPlayer) return;

        const response = await fetch(story_details.audiolink);
        if (response.status === 403) {
            alert("Audio access forbidden.");
            return;
        }

        const duration = audioPlayer.duration;
        if (duration < 30) {
            const newAudioUrl = `https://bucket2266.s3.ap-south-1.amazonaws.com/Sexstory_Audiofiles/${story}.mp3`;
            const newResponse = await fetch(newAudioUrl);
            if (newResponse.status === 200) {
                audioPlayer.src = newAudioUrl;
                audioPlayer.load();
            } else {
                const options = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ href: story_details.href, date: story_details.date }),
                };
                await fetch(`${process.env.BACKEND_URL}downloadAudio`, options);
                audioPlayer.src = newAudioUrl;
                audioPlayer.load();
            }
        }
    };

    const audioError = () => {
        setVideoErrorCounter(prev => prev + 1);
        if (videoErrorCounter <= 2) {
            videoPlayerRef.current.src = story_details.audiolink;
            videoPlayerRef.current.load();
            videoPlayerRef.current.play();
        }
    };


    const storiesLink_insideParagrapgh_Onclick = async (storyTitle_Hindi) => {


    }
    const relatedStoriesLinks_Onclick = async storyTitle_Hindi => {
        


    }




    if (storyRemoved) {
        return (
            <div className="flex justify-center mx-auto mt-10">
                <p className="text-red-600 text-2xl font-bold">Story removed</p>
            </div>
        );
    }


    return (
        <div className="md:w-3/5 p-4   rounded-lg "  >
            <Head>
                <meta name="referrer" content="no-referrer" />
                <title>{`${story_details.category.replace('-', ' ')} - ${story_details.Title}`}</title>
                <meta name="description" content={story_details.description[0]} />

            </Head>

            <div className='flex items-center justify-between'>

                <h1 itemProp="headline" className='text-[24px] sm:text-[27px] text-orange-800 font-inter'>{capitalizeWords(title)}</h1>
                <Menu as="div" className={` relative  text-left  md:scale-125 `}>
                    <div className=' w-fit '>
                        <Menu.Button className="inline-flex justify-center cursor-pointer  w-full rounded-md  shadow-sm px-2 py-2 bg-orange-200 text-sm font-medium text-gray-700 ">
                            Text Size
                            {/* <img className='ml-2' src='https://cdn-icons.flaticon.com/png/512/2043/premium/2043488.png?token=exp=1647712043~hmac=80017e50d71fb76634fd067d627f6063' alt='loading' height={14} width={14}></img> */}
                        </Menu.Button>

                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className=" z-50 origin-top-right absolute left-0 mt-2 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                            {filter.map(item => {
                                return (
                                    <Menu.Item key={item.sizeName}  >
                                        {({ active }) => (
                                            <p onClick={() => { textSizeChangerOnclick(item.sizecode) }} className={` px-4 py-2 text-xs md:text-sm  font-inter bg-orange-200 hover:text-red-500 cursor-pointer ${textSize === item.sizecode ? "text-red-500" : ""}`}
                                            >
                                                {item.sizeName}
                                            </p>
                                        )}
                                    </Menu.Item>



                                )
                            })}



                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
            <div className='flex items-center text-sm  my-2 space-x-2'>

                <div className='flex  items-center '>
                    <PencilAltIcon className='icon text-red-500' />
                    <p onClick={() => { router.push(`/author/${story_details.author.href.substring(story_details.author.href.indexOf('author/') + 7, story_details.author.href.length - 1)}`) }} className='cursor-pointer underline hover:text-red-500 font-semibold text-gray-600' >{story_details.author.name_english.length > 20 ? story_details.author.name : story_details.author.name_english}</p>
                </div>
                <p className='font-semibold text-gray-600'>{story_details.date.day}-{story_details.date.month}-{story_details.date.year}</p>

                <div className='flex items-center'>
                    <EyeIcon className='icon text-blue-500' />
                    <p className='font-semibold text-gray-600'>{story_details.views}</p>
                </div>

                <p onClick={() => { handleLanguageToggle() }} className='font-inter font-semibold text-orange-800 text-gray-600 underline cursor-pointer hover'>{language == "english" ? "हिंदी में पढ़ें" : "Read in English"}</p>

            </div>

            {story_details.audiolink &&

                <audio onLoadedMetadata={checkAudioDuration} ref={videoPlayerRef} className='w-full md:w-4/5 lg:w-2/5 p-1 bg-gray-500 rounded-full my-2'
                    // src={story_details.audiolink}
                    src={`${process.env.CLOUDFLARE_R2_AUDIOSTORY}${story}.mp3`}
                    controls onError={audioError} />
            }

            {storyArray.map(p => {
                return (
                    <div key={p}>
                        <p style={{ fontSize: textSize }} className={`text-gray-800 font-hindi tracking-wide`} >
                            {p.charAt(0).toUpperCase() + p.slice(1)}
                            <br />
                        </p>
                        <br></br>
                    </div>
                )
            })}
            <BannerAds />

            <div >
                <div className='flex'>
                    <FolderIcon className='icon text-orange-700' />
                    <p>{story_details.category}</p>
                </div>
                <div className='flex'>
                    <TagIcon className='icon text-orange-700' />
                    <div className='flex flex-wrap space-x-1'>

                        {story_details.tagsArray.map(tag => {
                            return (
                                <Link key={tag} href={`/tag/${tag.toLowerCase().replace(/ /g, "-")}`}>
                                    <p className='hover:text-red-800 cursor-pointer font-semibold underline rounded text-xs m- border-gray-500  ' >{tag}</p>
                                </Link>

                            )
                        })}
                    </div>
                </div>


                <div className='my-2 font-kalam tracking-wider'>
                    {story_details.storiesLink_insideParagrapgh.map(item => {

                        return (
                            <div key={item} className='flex'>
                                <ChevronRightIcon className='icon' />
                                <p onClick={() => { storiesLink_insideParagrapgh_Onclick(item) }} className='underline hover:text-red-800 cursor-pointer '>{item}</p>

                            </div>
                        )
                    })}
                </div>




                <p className='my-2 text-lg text-red-800 font-semibold'>ऐसी ही कुछ और कहानियाँ</p>


                <div className='my-2 font-kalam tracking-wider'>
                    {story_details.relatedStoriesLinks.map(item => {


                        return (
                            <div key={item} className='flex'>
                                <ChevronRightIcon className='icon' />
                                <p onClick={() => { relatedStoriesLinks_Onclick(item) }} className='underline hover:text-red-800 cursor-pointer '>{item}</p>

                            </div>
                        )
                    })}
                </div>

            </div>



            <DisqusComments data={{ identifier: story_details.href, title: story_details.Title }} />

            <BannerAds />
            <Outstreams />


        </div>
    )
}

export default Story


export async function getStaticPaths() {


    return {
        paths: [{
            params: {
                story_Category: 'teenage-girl',
                story: 'sister-ass-fuck-story'
            }
        }],
        fallback: 'blocking' // false or 'blocking'
    };
}



export async function getStaticProps(context) {


    const { story, story_Category } = context.params

    const data = { story: story, story_Category: story_Category }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}story_detailsAPI`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });

    var story_details = await rawResponse.json();

    const isAudioStory = story_details.data?.audiolink ? true : false;

    if (isAudioStory) {

        // const rawResponse2 = fetch(`${process.env.CLOUDFLARE_WORKER}uploadAudio_CloudflareR2`, {
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ story: story, audiolink: story_details.data.audiolink })
        // });

    }



    return {
        props: {
            story_details: story_details.data,
        }
    }


}
