import Link from "next/link";
import categories_photo from '@/JsonData/photos/categories_list.json'
import { video_categories } from '../JsonData/videos/Categories'

import { useRouter } from 'next/router'



const Pagination = ({ data }) => {


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

                <Link href={`${url}/page/${parseInt(currentPage) - 1}`}>
                    <div className={`${parseInt(currentPage) === 1 ? "hidden" : ""}`} >
                        <button className={`scale-90 md:scale-100 font-inter sm:text-med    sm:mx-4  rounded-lg bg-button px-4 py-2  hover:bg-orange-400 ml-1 bg-orange-300 cursor-pointer`}>Previous Page</button>
                    </div>
                </Link>


                <div className="flex items-center justify-center  rounded py-[1px]">
                    <p className="font-inter px-4 py-1 rounded text-gray-700  text-md sm:text-lg">{currentPage}</p>
                    <span className="mb-1 scale-125 text-red-600">/</span>
                    <p className="font-inter px-4 py-1 rounded text-gray-500  text-md sm:text-lg">{lastPage}</p>
                </div>




                <Link href={`${url}/page/${parseInt(currentPage) + 1}`}>
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
                <div className="md:hidden   mx-[16px] mt-4">
                    {video_categories.map(tag => (
                        <Link key={tag} href={`/tag/${tag.replace(/ /g, '_').trim()}`}>
                            <p className=" font-inter text-left my-2 py-1.5 px-8  text-sm hover:bg-orange-200 rounded-md text-semiblack  cursor-pointer underline">
                                {tag}
                            </p>
                        </Link>
                    ))}
                </div>
            )}


        </div>

    )
};
export default Pagination;