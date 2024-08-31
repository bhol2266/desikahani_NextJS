import { ClockIcon, EyeIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { FaRegEye } from "react-icons/fa";


function VideoThumbnail({ videoObj }) {

    const { id, thumbnail, likePercent, title, tags, duration, trailer, addedTime, views } = videoObj





    const stopMovie = (e) => {
        e.target.load();
    };

    const playMovie = (e) => {
        e.target.play();
    };

    return (
        <div>
            <a href={`/videos/${id}`} data-title={title}>
                <div className="animate-fade flex flex-col items-start justify-center cursor-pointer rounded-md overflow-hidden transform transition duration-150 mb-3 2xl:mb-4">
                    <div className={`relative w-full overflow-hidden  aspect-custom sm:aspect-video`}>
                        <img
                            className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ease-in-out"
                            src={thumbnail}
                            alt="Video Thumbnail"
                        />
                        <div className="absolute bottom-1.5 right-2 bg-black bg-opacity-60 text-white text-xs md:text-sm lg:text-md 2xl:text-lg  px-2 py-1 rounded">
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


                    <h2 className=' font-medium text-[20px] font-Opensans text-orange-800 cursor-pointer  whitespace-nowrap	overflow-hidden'>{videoObj.title}</h2>

                    <div className='flex items-center text-sm  my-1 space-x-2'>


                        <p className='font-semibold text-gray-600 ml-[1px]'>{videoObj.addedTime}</p>

                        <div className='flex items-center space-x-1'>
                            <FaRegEye className='icon text-blue-500' />

                            <p className='font-semibold text-gray-600'>  {videoObj.views}</p>
                        </div>
                    </div>

                    <div className='flex flex-wrap space-x-1'>

                        {videoObj.tags.map(tag => {
                            return (
                                <Link key={tag} href={`/videos/tag/${tag.replace(/ /g, "-")}`}>
                                    <p className='hover:text-orange-800 cursor-pointer underline  text-sm lg:text-lg m-1 font-arial'>{tag}</p>
                                </Link>
                            )
                        })}


                    </div>
                </div>
            </a>


        </div>
    );
}

export default VideoThumbnail;
