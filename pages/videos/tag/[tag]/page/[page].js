import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BeatLoader } from 'react-spinners';
import Outstreams from '../../../../../components/Ads/Outstream';
import Pagination from '../../../../../components/Pagination'
import VideoThumbnail from '../../../../../components/VideoThumbnail';

export function formatTag(input) {
    // Replace hyphens with spaces
    let replacedString = input.replaceAll('-', ' ');

    // Change the first letter to uppercase
    let formattedString = replacedString.charAt(0).toUpperCase() + replacedString.slice(1);

    return formattedString;
}


function TagPage({ finalDataArray, categoryTitle, categoryDescription, pagination_nav_pages, currentPage, CategoryHref }) {

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
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${formatTag(categoryTitle)} - Desi Sex Videos`}</h1>
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
            <Pagination data={{ url: `/videos/tag/${CategoryHref}`, currentPage: currentPage.toString(), lastPage: pagination_nav_pages[1], }} />

            <Outstreams />

        </div>
    )
}

export default TagPage


export async function getStaticPaths() {

    return {
        paths: [{
            params: {
                tag: 'Fetish',
                page: '1'
            }
        }],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {


    const { page, tag } = context.params



    const data = { tag: tag, page: page }
    const rawResponse = await fetch(`${process.env.FRONTEND_URL}api/videos/getTagVideos`, {
        method: 'POST', // Specify the method as POST
        headers: {
            'Content-Type': 'application/json', // Set the Content-Type to application/json
        },
        body: JSON.stringify(data) // Convert the payload to a JSON string
    });

    const resData = await rawResponse.json();


    return {
        props: {
            finalDataArray: resData.videos,
            pagination_nav_pages: resData.pagination_nav_pages,
            categoryDescription: "देसी लड़की, भाभी, आंटी के बेस्ट पोर्न क्लिप्स, सेल्फी सेक्स चैट, हिंदी वेब सीरीज, कॉलेज गर्ल एम एम एस. ब्लू फिल्म का मजा लें.",
            categoryTitle: tag,
            CategoryHref: tag,
            currentPage: parseInt(page),
        }
    }

}
