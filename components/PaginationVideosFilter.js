import Link from "next/link";
import categories_photo from '@/JsonData/photos/categories_list.json'
import video_categories from '../JsonData/videos/Categories.json'
import { CiVideoOn } from "react-icons/ci";

import { useRouter } from 'next/router'
import { useEffect } from "react";
import Outstreams from "./Ads/Outstream";


const PaginationVideosFilter = ({ data }) => {


    const url = data.url;
    const currentPage = data.currentPage
    const lastPage = data.lastPage

    const router = useRouter();
    const routePath = router.asPath;
    const isPhotoPage = routePath.includes('/photo');
    const isVideoPage = routePath.includes('/videos');




    return (
        <div className="mt-10 mb-[100px]">

            <div className={`${parseInt(currentPage) === 1 || parseInt(currentPage) === parseInt(lastPage) ? "justify-around" : "justify-between"} flex items-center   md:justify-center`}>

                <Link href={`${url}&page=${parseInt(currentPage) - 1}`}>
                    <div className={`${parseInt(currentPage) === 1 ? "hidden" : ""}`} >
                        <button className={`scale-90 md:scale-100 font-inter sm:text-med    sm:mx-4  rounded-lg bg-button px-4 py-2  hover:bg-orange-400 ml-1 bg-orange-300 cursor-pointer`}>Previous Page</button>
                    </div>
                </Link>


                <div className="flex items-center justify-center  rounded py-[1px]">
                    <p className="font-inter px-4 py-1 rounded text-gray-700  text-md sm:text-lg">{currentPage}</p>
                    <span className="mb-1 scale-125 text-red-600">/</span>
                    <p className="font-inter px-4 py-1 rounded text-gray-500  text-md sm:text-lg">{lastPage}</p>
                </div>




                <Link href={`${url}&page=${parseInt(currentPage) + 1}`}>
                    <div className={`${parseInt(currentPage) === parseInt(lastPage) ? "hidden" : ""}`} >
                        <button className={`scale-90 md:scale-100 font-inter sm:text-md    sm:mx-4  rounded-lg bg-button px-4 py-2  hover:bg-orange-400 ml-1 bg-orange-300 cursor-pointer`}>Next Page</button>
                    </div>
                </Link>
            </div>



            {isPhotoPage &&
                <p className=" text-center mx-auto text-[18px] border-gray-400 rounded-md text-black font-semibold  p-1 pl-4 pr-2 cursor-pointer bg-white opacity-75 mt-[30px]">
                    Photo Categories
                </p>
            }

            {isPhotoPage && (
                <div className="md:hidden   mx-[16px] mt-4">
                    {categories_photo.map(category => (
                        <Link key={category.href} href={`/photo/category/${category.href}`}>
                            <p className=" font-inter text-left my-2 py-1.5 px-8  text-sm hover:bg-orange-200 rounded-md text-semiblack  cursor-pointer underline">
                                {category.category_title}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
            {isVideoPage && (

                <div className={`mx-[16px] mt-4 grid grid-cols-3 py-3 sm:grid-cols-3 gap-2 md:gap-3 lg:gap-4 md:grid-cols-4 lg:grid-cols-5`}>
                    {video_categories.map(category => {
                        const imageSrc = `/CategoryPics/${category.category.replace(/ /g, '-')}.jpg`;
                        const categorySlug = category.category.toLowerCase().trim().substring(0, category.category.indexOf('.png'));

                        return (
                            <Link key={category.category} href={`/videos/tag/${category.category.replace(/ /g, '-')}`}>
                                <div className='relative hover:scale-105 transform transition duration-150 rounded  aspect-video'>
                                    <img
                                        className='object-cover h-full w-full'
                                        alt={category.category}
                                        src={imageSrc}
                                        loading="lazy"
                                    />
                                    <div className="flex items-center justify-start pt-1">

                                        <h2 className='font-inter rounded-b  text-sm lg:text-lg px-1 bottom-0  text-center z-10 text-gray-600 '>
                                            {category.category}
                                        </h2>

                                        <div className="flex items-center ">
                                            <CiVideoOn className="text-gray-500" />
                                            <span className="text-xs text-gray-500">{`(15k)`}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            )}


            <div className='sm:flex items-center justify-center sm:w-1/2 lg:w-1/4 mx-auto mt-4'>
                <Outstreams />
                <Outstreams />
                <Outstreams />
            </div>


        </div>

    )
};
export default PaginationVideosFilter;