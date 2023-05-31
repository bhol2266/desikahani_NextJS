import React from 'react'
import Stories from '../../components/Stories';
import { useRouter } from 'next/router'
import Head from 'next/head'
import { BeatLoader } from 'react-spinners';



function Author({ finalDataArray, categoryTitle, categoryDescription, }) {

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

            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`
लेखक :${categoryTitle}`}</h1>
            <p className='text-lg m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : 1`}</p>
            <Stories stories={finalDataArray} />





        </div>
    )
}

export default Author

export async function getStaticPaths() {


    return {
        paths: [{
            params: {
                author: 'impapi001gmail-com'
            }
        }],
        fallback: true // false or 'blocking'
    };
}



export async function getStaticProps(context) {


    const { author } = context.params
    const data = { author: author }

    const rawResponse = await fetch(`${process.env.BACKEND_URL}author`, {
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
            categoryTitle: resData.data.categoryTitle,
            categoryDescription: resData.data.categoryDescription,
        
        }
    }



}
