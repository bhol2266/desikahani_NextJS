import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import VideoThumbnail from "../../components/VideoThumbnail";
import MultiformatAds from "../../components/Ads/MultiFormatAds";
import Outstreams from "../../components/Ads/Outstream";
import Pagination from '../../components/Pagination'

function Index({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage, CategoryHref }) {

    const router = useRouter()

    return (
        <div className="">

            <Head>
                <title>{`${categoryTitle}- Free Desi Kahani Sex Stories`} </title>
                <meta name="description"
                    content={`${categoryDescription}`} />

            </Head>


            <MultiformatAds />



            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Sex Videos`}</h1>
            <p className='text-lg  m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : 1`}</p>


            <div className='grid grid-cols-1 gap-6 md:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 px-1'
            >
                {
                    finalDataArray.map(story => {
                        return (
                            <VideoThumbnail key={story.Title} story_details={story} />
                        )
                    })
                }

            </div>



            {/* PAGINATION */}
            <Pagination data={{ url: `/videos`, currentPage: currentPage, lastPage: pagination_nav_pages[1], }} />

            <MultiformatAds />
            <Outstreams />


        </div>
    )
}

export default Index




export async function getStaticProps(context) {


    const data = { page: "1" }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepageVideo`, {
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
            pagination_nav_pages: resData.data.pagination_nav_pages,
            categoryDescription: "देसी लड़की, भाभी, आंटी के बेस्ट पोर्न क्लिप्स, सेल्फी सेक्स चैट, हिंदी वेब सीरीज, कॉलेज गर्ल एम एम एस. ब्लू फिल्म का मजा लें.",
            categoryTitle: "Hindi sex videos",
            currentPage: "1"
        }
    }



}
