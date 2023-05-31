import React from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BeatLoader } from 'react-spinners';
import MultiformatAds from '../../../../../components/Ads/MultiFormatAds';
import Outstreams from '../../../../../components/Ads/Outstream';
import Pagination from '../../../../../components/Pagination'
import VideoThumbnail from '../../../../../components/VideoThumbnail';


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
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Sex Videos`}</h1>
            <p className='text-lg  m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : ${currentPage}`}</p>

            <MultiformatAds />

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
            <Pagination data={{ url: `/videos/tag/${CategoryHref}`, currentPage: currentPage.toString(), lastPage: pagination_nav_pages[1], }} />

            <MultiformatAds />
            <Outstreams />

        </div>
    )
}

export default TagPage


export async function getStaticPaths() {

    return {
        paths: [{
            params: {
                tag: 'college-girl-video',
                page: '1'
            }
        }],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {


    const { page, tag } = context.params



    const data = { tag: tag, page: page }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}VideoByTag`, {
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
            categoryDescription: resData.data.categoryDescription,
            categoryTitle: resData.data.categoryTitle,
            CategoryHref: tag,
            currentPage: parseInt(page),
        }
    }

}
