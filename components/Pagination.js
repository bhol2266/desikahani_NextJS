import Link from "next/link";
import { useEffect, useState } from "react";
import MultiformatAds from "./Ads/MultiFormatAds";



const Pagination = ({ data }) => {


    const url = data.url;
    const currentPage = data.currentPage
    const lastPage = data.lastPage


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


        </div>

    )
};
export default Pagination;