import React from 'react'
import Stories from '../../components/Stories';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import Pagination from '../../components/Pagination';
 
function Page({ finalDataArray, pagination_nav_pages, currentPage }) {

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
                <title>Antarvasna Hindi sex stories - Free Sex kahani</title>
                <meta name="description"
                    content="New best Hindi Sex Stories for free, Indian sexy stories daily of hot girls, bhabhi and aunties. फ्री सेक्स कहानी पर असली अन्तर्वासना स्टोरी का मजा लें." />

            </Head>

            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : ${currentPage}`}</p>

            <Stories stories={finalDataArray} />



            {/* PAGINATION */}
            <Pagination data={{ url: ``, currentPage: currentPage, lastPage: pagination_nav_pages[1], }} />


        </div>
    )
}

export default Page


export async function getStaticPaths() {

    return {

        paths: [
            { params: { page: '2' } }
        ],
        fallback: true // false or 'blocking'
    };
}


export async function getStaticProps(context) {


    const { page } = context.params

    const data = { page: page }
    const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepageStories`, {
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
            currentPage: parseInt(page),

        }



    }
}
