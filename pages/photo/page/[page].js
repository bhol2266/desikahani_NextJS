import {
    ArrowLeftIcon, ArrowRightIcon
} from '@heroicons/react/solid';
import { useRouter } from "next/router";
import { useContext, useEffect } from 'react';
import BannerAds from "../../../components/Ads/BannerAds";
import Outstreams from "../../../components/Ads/Outstream";
import PicsThumbnail from "../../../components/PicsThumbnail";
import videosContext from '../../../context/videos/videosContext';
import Link from 'next/link'
import Head from 'next/head'
import MultiformatAds from '../../../components/Ads/MultiFormatAds';
import Pagination from '../../../components/Pagination'
import { BeatLoader } from 'react-spinners';


function Pics({ finalDataArray, currentPage, pagination_nav_pages }) {


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

    const displaypics = finalDataArray.map(picData => {

        const digitalOceanUrl="https://bucket2266.blr1.cdn.digitaloceanspaces.com/"+"FirebaseFolders/"+picData.fullalbum_href+"/thumbnail.png";
        picData['thumbnail'] = digitalOceanUrl;

        return (
            <PicsThumbnail key={picData._id} data={picData} />

        )
    })

    return (
        <div className=" ">

            <Head>
                <title>Indian Nude Photos | Desi Scandals</title>
                <meta name="description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />


                <meta property="og:title" content="Indian Nude Photos | Desi Scandals" />
                <meta property="og:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta property="og:url" content={`https://www.desikahaniya.in/photo/${page}`} />
                <meta property="og:site_name" content="Free Hindi Sex Stories" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indian Nude Photos | Desi Scandals" />
                <meta name="twitter:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta name="twitter:label1" content="पोस्ट" />
                <meta name="twitter:data1" content="85" />
            </Head>

            <MultiformatAds />

            <div className="grid grid-cols-2 p-1 sm:grid-cols-1 gap-x-1  md:grid-cols-3 lg:grid-cols-4 space-x-2 space-y-4 ">

                {displaypics}
            </div>

            {/* PAGINATION */}
            <Pagination data={{ url: `/photo`, currentPage: currentPage, lastPage: pagination_nav_pages[1] }} />

            <MultiformatAds />

            <Outstreams />


        </div>
    )
}

export default Pics


export async function getStaticPaths() {
 
    return {
        paths:  [{ params: { page: '2' } }],
        fallback: true // false or 'blocking'
    };
}

export async function getStaticProps(context) {

    const { page } = context.params;

    const data = { page: page }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepagePics`, {
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
            currentPage: page,
        }
    }
}

