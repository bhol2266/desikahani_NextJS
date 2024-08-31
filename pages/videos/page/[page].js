import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { BeatLoader } from 'react-spinners';
import Outstreams from '../../../components/Ads/Outstream';
import Pagination from '../../../components/Pagination';
import VideoThumbnail from '../../../components/VideoThumbnail';


function Category({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage, CategoryHref }) {

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
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Sex Videos`}</h1>
            <p className='text-lg  m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : ${currentPage}`}</p>


            <div className='grid grid-cols-1 gap-6 md:gap-6 lg:gap-8 lg:grid-cols-2 xl:grid-cols-3 px-1'
            >
                 {
                    finalDataArray.map(videoObj => {
                        return (
                            <VideoThumbnail key={videoObj.id} videoObj={videoObj} />
                        )
                    })
                }

            </div>

            {/* PAGINATION */}
            <Pagination data={{ url: `/videos`, currentPage: currentPage, lastPage: pagination_nav_pages[1], }} />

            <Outstreams />

        </div>
    )
}

export default Category


export async function getStaticPaths() {

    return {

        paths: [{ params: { page: '1' } }, { params: { page: '2' } }],
        fallback: true // false or 'blocking'
    };
}


export async function getStaticProps(context) {


    const { page } = context.params


    const rawResponse = await fetch(`${process.env.FRONTEND_URL}api/videos/getHomepageVideos`, {
        method: 'POST', // Specify the method as POST
        headers: {
            'Content-Type': 'application/json', // Set the Content-Type to application/json
        },
        body: JSON.stringify({ page: page.toString() }) // Convert the payload to a JSON string
    });

    const resData = await rawResponse.json();

    return {
        props: {
            finalDataArray: resData.videos,
            pagination_nav_pages: resData.pagination_nav_pages,
            categoryDescription: "देसी लड़की, भाभी, आंटी के बेस्ट पोर्न क्लिप्स, सेल्फी सेक्स चैट, हिंदी वेब सीरीज, कॉलेज गर्ल एम एम एस. ब्लू फिल्म का मजा लें.",
            categoryTitle: "Hindi sex videos",
            currentPage: parseInt(page),
        }
    }

}
