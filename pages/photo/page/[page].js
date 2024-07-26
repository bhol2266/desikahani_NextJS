import Head from 'next/head';
import { useRouter } from "next/router";
import { useContext } from 'react';
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../components/Pagination';
import PicsThumbnail from "../../../components/PicsThumbnail";
import videosContext from '../../../context/videos/videosContext';
import Outstreams from '../../../components/Ads/Outstream';


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

    const displaypics = finalDataArray.map((picData, index) => {


        let currentDate = new Date();
        picData.date.day = currentDate.getDate().toString().padStart(2, '0');
        picData.date.month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        picData.date.year = currentDate.getFullYear().toString();


        let currentDate2 = new Date(`${picData.date.year}-${picData.date.month}-${picData.date.day}`);

        // Subtract days
        let daysBefore = Number(currentPage) * 12 + index
        currentDate2.setDate(currentDate2.getDate() - daysBefore);

        // Update the date object with the new values
        picData.date.day = currentDate2.getDate().toString().padStart(2, '0');
        picData.date.month = (currentDate2.getMonth() + 1).toString().padStart(2, '0');
        picData.date.year = currentDate2.getFullYear().toString();


        const digitalOceanUrl = "https://bucket2266.blr1.digitaloceanspaces.com/" + "NudePics/" + picData.fullalbum_href + "/thumbnail.png";
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
                <meta property="og:url" content={`https://www.Hindisexstory.app/photo/${page}`} />
                <meta property="og:site_name" content="Free Hindi Sex Stories" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indian Nude Photos | Desi Scandals" />
                <meta name="twitter:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta name="twitter:label1" content="पोस्ट" />
                <meta name="twitter:data1" content="85" />
            </Head>


            <div className="grid grid-cols-2 p-1 sm:grid-cols-1 gap-x-1  md:grid-cols-3 lg:grid-cols-4 space-x-2 space-y-4 ">

                {displaypics}
            </div>

            {/* PAGINATION */}
            <Pagination data={{ url: `/photo`, currentPage: currentPage, lastPage: pagination_nav_pages[1] }} />

            <Outstreams />


        </div>
    )
}

export default Pics


export async function getStaticPaths() {

    return {
        paths: [{ params: { page: '2' } }],
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

