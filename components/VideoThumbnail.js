import { MdOutlineRemoveRedEye } from "react-icons/md";
import Link from 'next/link';
import { FaRegThumbsUp } from "react-icons/fa";
import { ClockIcon } from "@heroicons/react/solid";
import { useState } from "react";

function VideoThumbnail({ videoObj }) {


    const { id, thumbnail, duration, trailer, addedTime, views, tags, title, likePercent } = videoObj;
    const [showDuration, setshowDuration] = useState(true)

    const stopMovie = (e) => {
        e.target.load();
        setshowDuration(true)
    };

    const playMovie = (e) => {
        e.target.play();
        setshowDuration(false)

    };

    return (
        <Link href={`/videos/${id}`} className="select-none animate-fade flex flex-col items-start justify-center cursor-pointer rounded-md overflow-hidden transform transition duration-150 mb-3 2xl:mb-4">
            <div className={`relative w-full overflow-hidden aspect-custom sm:aspect-video`}>
                <img
                    className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                    src={thumbnail}
                    alt="Video Thumbnail"
                />
                <div className={`${showDuration ? "absolute" : "hidden"}  z-10 bottom-1.5 right-2 bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-md 2xl:text-lg px-2 py-1 rounded`}>
                    <span className="font-inter">{duration}</span>
                </div>
                <video
                    className={`absolute top-0 left-0 w-full h-full object-cover`}
                    onMouseOver={playMovie}
                    onMouseLeave={stopMovie}
                    src={trailer}
                    preload="none"
                    muted
                />
            </div>

            <span className="font-inter text-[14px] md:text-[16px] xl:text-[18px] px-1 lg:pl-2 py-1 text-orange-800 whitespace-nowrap">
                {title}
            </span>


            <div className="flex items-center justify-start w-full pl-0.5 sm:pl-1 md:pb-2 lg:pl-2 font-arial -mt-1 lg:-mt-1.5">
                <div className="flex items-center space-x-1">
                    <p className='text-[13px] md:text-[15px] xl:text-[16px] text-gray-500  font-inter'>{views}</p>
                    <MdOutlineRemoveRedEye className='text-lg text-gray-500 text-blue-500' />

                </div>
                <div className="flex items-center ml-3">
                    <FaRegThumbsUp className="icon  w-[15px] h-[15px] xl:w-[25px] xl:h-[25px] text-green-600" />
                    <p className='text-[13px] md:text-[15px] xl:text-[16px]  font-inter sm:ml-1 xl:ml-2 text-gray-500'>{likePercent}</p>
                </div>
                <div className="hidden sm:flex items-center ml-2">

                    <ClockIcon className="icon  w-[15px] h-[15px] xl:w-[25px] xl:h-[25px] text-gray-500" />
                    <p className='text-[13px] md:text-[15px] xl:text-[16px]  font-inter text-gray-500'>{addedTime}</p>
                </div>
            </div>

            <div className='flex flex-nowrap overflow-x-auto space-x-2 lg:space-x-2 w-full scrollbar-hide'>
                {tags.map(tag => (
                    <Link
                        key={tag}
                        href={`/videos/tag/${tag.replace(/ /g, "-")}`}
                    >
                        <p className='whitespace-nowrap hover:text-orange-800 text-gray-600 cursor-pointer underline text-xs  lg:text-md font-arial'>
                            {tag}
                        </p>
                    </Link>
                ))}
            </div>



        </Link>
    );
}

export default VideoThumbnail;
