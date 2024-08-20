import Head from 'next/head';
import { useRouter } from "next/router";
import { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import Pagination from '@/components/Pagination';
import PicsThumbnail from "@/components/PicsThumbnail";
import videosContext from '@/context/videos/videosContext';
import Outstreams from '@/components/Ads/Outstream';


function Pics({  finalDataArray, currentPage, pagination_nav_pages, category_title, category_description,category}) {


    const context = useContext(videosContext);
    const router = useRouter();
    var { page } = router.query

    if (router.isFallback) {
        return (
            <div className="flex justify-center mx-auto mt-10 ">
                <BeatLoader loading size={25} color={'orange'} />
            </div>
        )
    }

    const displaypics = finalDataArray.map((picData, index) => {


        return (
            <PicsThumbnail key={picData.title} data={picData} />

        )
    })

    return (
        <div className=" ">

            <Head>
            <title>{category_title} | Indian Nude Photos Page - {currentPage}</title>
            <meta name="description" content={category_description} />  <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />


                <meta property="og:title" content="Indian Nude Photos | Desi Scandals" />
                <meta property="og:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta property="og:url" content={`https://www.Hindisexstory.app/photo/${page}`} />
                <meta property="og:site_name" content="Free Hindi Sex Stories" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indian Nude Photos | Desi Scandals" />
                <meta name="twitter:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta name="twitter:label1" content="पोस्ट" />
                <meta name="twitter:data1" content="85" />
            </Head>

            <h1 className='text-xl font-semibold m-2 mx-4 md:text-2xl font-inter'>{category_title}</h1>
            <p className='text-lg m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{category_description}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl'>PAGE : {currentPage}</p>

            <div className="grid grid-cols-2 p-1 sm:grid-cols-1 gap-x-1  md:grid-cols-3 lg:grid-cols-4 space-x-2 space-y-4 ">

                {displaypics}
            </div>

            {/* PAGINATION */}
            <Pagination data={{ url: `/photo/category/${category}`, currentPage: pagination_nav_pages[0], lastPage: pagination_nav_pages[1] }} />

            <Outstreams />


        </div>
    )
}

export default Pics


export async function getStaticPaths() {

    return {
        paths: [{ params: { photo_category: 'bada-lund', page: '2' } }],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {

    const { photo_category, page } = context.params;

    const data = { page: page, category: photo_category };


    const rawResponse = await fetch(`https://my-worker.ukdevelopers007.workers.dev/desikahaniya/getPicsWithCategory`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });


    const resData = await rawResponse.json();

    if (!resData.success) {
        // Handle error
        return {
            notFound: true,
        };
    }


    return {
        props: {
            category: photo_category,
            finalDataArray: resData.data.finalDataArray,
            pagination_nav_pages: resData.data.paginationNavPages,
            category_title: resData.data.category_title,
            category_description: resData.data.category_description,
            currentPage: page,

        }
    }
}
