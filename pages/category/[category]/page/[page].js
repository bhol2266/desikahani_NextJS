import React, { useEffect } from 'react'
import Stories from '../../../../components/Stories';
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';
import Pagination from '../../../../components/Pagination';


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
                <title>{`${categoryTitle}- Free Hindi Sex Stories`} </title>
                <meta name="description"
                    content={`${categoryDescription}`} />
            </Head>
            <h1 className='text-xl font-semibold m-2 mx-4  md:text-2xl font-inter'>{`${categoryTitle} - Desi Kahani`}</h1>
            <p className='text-lg  m-2 mx-4 md:text-xl font-light text-sb font-hindi'>{categoryDescription}</p>
            <p className='text-lg text-right font-medium m-2 mx-4 md:text-xl '>{`PAGE : ${currentPage}`}</p>
            <Stories stories={finalDataArray} />



            {/* PAGINATION */}
            <Pagination data={{ url: `/category/${CategoryHref}`, currentPage: currentPage.toString(), lastPage: pagination_nav_pages[1], }} />



        </div>
    )
}

export default Category


export async function getStaticPaths() {
    const categories = [

        {
            category_title: 'Aunty Sex Story',
            href: 'aunty-sex'
        },
        
    
        {
            category_title: 'Bhabhi Sex',
            href: 'bhabhi-sex'
        },
        {
            category_title: 'Desi Kahani',
            href: 'desi-kahani'
        },
    
        {
            category_title: 'Family Sex Stories',
            href: 'family-sex-stories'
        },
        {
            category_title: 'First Time Sex',
            href: 'first-time-sex'
        },
        {
            category_title: 'Gay Sex Stories In Hindi',
            href: 'gay-sex-story-hindi'
        },
        {
            category_title: 'Group Sex Stories',
            href: 'group-sex-stories'
        },
        {
            category_title: 'Indian Sex Stories',
            href: 'indian-sex-stories'
        },
        {
            category_title: 'Sali Sex',
            href: 'sali-sex'
        },
        {
            category_title: 'Teacher Sex',
            href: 'teacher-sex'
        },
        {
            category_title: 'Teenage Girl',
            href: 'teenage-girl'
        },
        {
            category_title: 'XXX Kahani',
            href: 'xxx-kahani'
        },
        {
            category_title: 'अन्तर्वासना',
            href: 'antarvasna'
        },
        {
            category_title: 'हिंदी सेक्स स्टोरीज',
            href: 'hindi-sex-stories'
        },
    
    ]
    


    var arrayPaths = []

    for (let index = 0; index < categories.length; index++) {
        arrayPaths.push({ params: { category: categories[index].href, page: '1' } })
    }
    return {

        paths: arrayPaths,
        fallback: true // false or 'blocking'
    };
}


export async function getStaticProps(context) {


    const { category, page } = context.params
    const data = { category: category, page: page }

    const rawResponse = await fetch(`${process.env.BACKEND_URL}category`, {
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
            pagination_nav_pages: resData.data.pagination_nav_pages,
            CategoryHref: category,
            currentPage: page
        }
    }
}
