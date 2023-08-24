import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'

import React from 'react'

import videosContext from '../context/videos/videosContext'
import Link from 'next/link'

import { db, storage } from '../firebase'
import { ref, uploadString, getDownloadURL, uploadBytes } from "firebase/storage";
import RecommendedAds from '../components/Ads/RecommendedAds';
import Stories from '../components/Stories';
import Script from 'next/script';
import Pagination from '../components/Pagination'

export default function Home({ finalDataArray, pagination_nav_pages, currentPage }) {

  const { setcurrentLocation } = useContext(videosContext);

  useEffect(() => {


    async function fetchData() {
      var location = {}
      if (!localStorage.getItem("location") === null) {
        setcurrentLocation(location)
      }
      else {
        try {

          const response = await fetch('https://api.db-ip.com/v2/free/self')
          location = await response.json()
          console.log(location);

        } catch (error) {
          console.log(error);
        }
        setcurrentLocation(location)
        localStorage.setItem("location", JSON.stringify(location))
      }
    }

    fetchData()



  }, []);


  return (
    <div className='w-full' >
      <Head>
        <title>Free Desi kahani | Hindi sex story audio - हिंदी सेक्स कहानियाँ</title>
        <meta name="description"
          content="Free Desi kahani Sex Stories, Antarvasna video, Antarvasna audio, Devar bhabhi sex story, Jija saali sex stories, desi sex story." />

        <meta name="google-site-verification" content="ISzQqvv3rsqe3r08y3fuJIyHglFZLrrTQBHb_9UrNUg" />

      </Head>






      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-QYJCRSNJ57"
      />

      <Script id="gtm-script" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QYJCRSNJ57');`}
      </Script>


      <main className="flex ">
        <div className='w-full'>
          <h1 className="text-center font-light text-sb font-hindi text-[22px] font-md md:text-[30px] rounded-lg  md:px-24 py-3 shadow-md ">
            Free Desi kahani Sex Stories - अन्तर्वासना की हॉट हिंदी सेक्स कहानियाँ
          </h1>




          <Stories stories={finalDataArray} />




          {/* PAGINATION */}
          <Pagination data={{ url: ``, currentPage: currentPage, lastPage: pagination_nav_pages[1], }} />

        </div>
      </main>

      <footer >
        <a className='' href="https://www.chutlunds.live/">.</a>

        <a className='' href="https://www.chutlunds.com/">.</a>

      </footer>
    </div>
  )
}




export async function getStaticProps() {

  console.log(`${process.env.BACKEND_URL}HomepageStoriesUpdate`);
  const data = { page: "1" }
  const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepageStoriesUpdate`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  });

  const resData = await rawResponse.json();

  console.log(resData);
  return {
    props: {
      finalDataArray: resData.data.finalDataArray,
      pagination_nav_pages: resData.data.pagination_nav_pages,
      currentPage: 1,
    }
  }
}
