import React from 'react'
import Head from 'next/head'
import VideoThumbnail from "../../components/VideoThumbnail";
import Outstreams from "../../components/Ads/Outstream";
import Pagination from '../../components/Pagination'
import Videos from '../../components/Videos';

function Index({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage }) {

    
    return (
        <div>
            <Head>
                <title>{`${categoryTitle} - Free Desi Kahani Sex Stories`}</title>
                <meta name="description" content={`${categoryDescription}`} />
            </Head>



            <h1 className='text-xl font-semibold m-2 mx-4 md:text-2xl font-inter'>{`${categoryTitle} - Desi Sex Videos`}</h1>
            <p className='text-lg m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>

            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl'>{`PAGE : ${currentPage}`}</p>



            < Videos finalDataArray={finalDataArray} />


            {/* PAGINATION */}
            <Pagination data={{ url: `/videos`, currentPage, lastPage: pagination_nav_pages[1] }} />

        </div>
    )
}

export default Index

export async function getStaticProps() {
    const rawResponse = await fetch(`${process.env.BACKEND_URL}getHomepageVideos`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ page: '1' })
    });

    const resData = await rawResponse.json();

    return {
        props: {
            finalDataArray: resData.videos,
            pagination_nav_pages: resData.pagination_nav_pages,
            categoryDescription: "देसी लड़की, भाभी, आंटी के बेस्ट पोर्न क्लिप्स, सेल्फी सेक्स चैट, हिंदी वेब सीरीज, कॉलेज गर्ल एम एम एस. ब्लू फिल्म का मजा लें.",
            categoryTitle: "Hindi sex videos",
            currentPage: "1"
        }
    }
}
