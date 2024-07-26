import React, { useEffect } from 'react'
import Stories from '../../../../components/Stories';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../../components/Pagination';


function Date({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage, CategoryHref }) {

    const router = useRouter();
    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={20} color={'orange'} />
            </div>
        )
    }




    return (
        <div>
            <Head>
                <title>{`${categoryTitle}- Free Hindi Sex Stories`} </title>
                <meta name="description"
                    content={`${categoryDescription}`} />
            </Head>
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Kahani`}</h1>
            <p className='text-lg  m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : ${currentPage}`}</p>
            <Stories stories={finalDataArray} />



            {/* PAGINATION */}
            <Pagination data={{ url: `/date/${CategoryHref}`, currentPage: currentPage.toString(), lastPage: pagination_nav_pages[1], }} />



        </div>
    )
}

export default Date


export async function getStaticPaths() {


    return {
        paths: [{
            params: {
                date: '2022-09',
                page: '1'
            }
        }],
        fallback: true // false or 'blocking'
    };
}


export async function getStaticProps(context) {


    const { date, page } = context.params

    console.log(date, page);

    const year = date.substring(0, 4)
    const month = date.substring(5, 7)
    const data = { year: year, month: month, page: page }


    const rawResponse = await fetch(`${process.env.BACKEND_URL}date`, {
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
            finalDataArray: resData.data.finalDataArray,
            categoryTitle: resData.data.categoryTitle,
            categoryDescription: resData.data.categoryDescription,
            pagination_nav_pages: resData.data.pagination_nav_pages,
            CategoryHref: date,
            currentPage: page
        }
    }
}
