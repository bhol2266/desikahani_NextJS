import React from 'react'
import Stories from '../../../components/Stories';
// import { freeSexkahani } from '../../../config/freeSexkahani';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../components/Pagination';


function Index({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage, CategoryHref }) {

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
                <title>{`${categoryTitle}- Free Desi Kahani Sex Stories`} </title>
                <meta name="description"
                    content={`${categoryDescription}`} />
            </Head>
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Kahani`}</h1>

            <p className='text-lg font-medium m-2 mx-4 md:text-xl font-inter'>{categoryDescription}</p>
            <p className='text-lg text-right  m-2 mx-4 md:text-xl font-light text-sb font-hindi '>{`PAGE : 1`}</p>
            <Stories stories={finalDataArray} />


            {/* PAGINATION */}

            <Pagination data={{ url: `/tag/${CategoryHref}`, currentPage: currentPage, lastPage: pagination_nav_pages[1], }} />




        </div>
    )
}

export default Index

export async function getStaticPaths() {

    return {

        paths: [{
            params: {
                tag: 'oral-sex'
            }
        }],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {


    const { tag } = context.params

    const data = { tag: tag, page: "1" }

    const rawResponse = await fetch(`${process.env.BACKEND_URL}tag`, {
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
            CategoryHref: tag,
            currentPage: 1
        }
    }

}
