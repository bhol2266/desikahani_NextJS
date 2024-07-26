import Head from 'next/head';
import { useRouter } from "next/router";
import { useContext } from 'react';
import Outstreams from "../../components/Ads/Outstream";
import Pagination from '../../components/Pagination';
import PicsThumbnail from "../../components/PicsThumbnail";
import videosContext from '../../context/videos/videosContext';

function Pics({ finalDataArray, currentPage, pagination_nav_pages }) {

    const context = useContext(videosContext);
    const { setdisclaimerShow, } = context;
    const router = useRouter();


    const displaypics = finalDataArray.map((picData, index) => {


        return (
            <PicsThumbnail key={picData.title} data={picData} />

        )
    })

    return (
        <div className=" ">

            <Head>
                <title>Indian Nude Photos | Desi Scandals</title>
                <meta name="description"
                    content="Antarvasna free desi Indian sex photos. Desi sex pics of porn action of chut, lund and gaand chudai." />
                <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />


                <meta property="og:title" content="Indian Nude Photos | Desi Scandals" />
                <meta property="og:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta property="og:url" content="https://www.Hindisexstory.app/photo" />
                <meta property="og:site_name" content="Free Hindi Sex Stories" />


                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Indian Nude Photos | Desi Scandals" />
                <meta name="twitter:description"
                    content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
                <meta name="twitter:label1" content="पोस्ट" />
                <meta name="twitter:data1" content="85" />
            </Head>



            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 md:gap-3 lg:gap-4  md:grid-cols-5 lg:grid-cols-6">

                {displaypics}
            </div>

            {/* PAGINATION */}
            <Pagination data={{ url: `/photo`, currentPage:  pagination_nav_pages[0], lastPage: pagination_nav_pages[1] }} />



            <Outstreams />


        </div>
    )
}

export default Pics


export async function getStaticProps(context) {
    const data = { page: "1" };

    const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepagePics`, {
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
            finalDataArray: resData.data.finalDataArray,
            pagination_nav_pages: resData.data.paginationNavPages,
            currentPage: 1,
        }
    }
}