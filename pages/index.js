import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import React, { useContext, useEffect } from 'react';
import Pagination from '../components/Pagination';
import Stories from '../components/Stories';
import videosContext from '../context/videos/videosContext';



export default function Home({ finalDataArray, pagination_nav_pages, currentPage }) {
  const { setcurrentLocation } = useContext(videosContext);

  console.log(finalDataArray[0].tagsArray);




  useEffect(() => {
    async function fetchData() {
      let location = {};
      if (localStorage.getItem("location") === null) {
        setcurrentLocation(location);
      } else {
        try {
          const response = await fetch('https://api.db-ip.com/v2/free/self');
          location = await response.json();
          console.log(location);
        } catch (error) {
          console.log(error);
        }
        setcurrentLocation(location);
        localStorage.setItem("location", JSON.stringify(location));
      }
    }

    fetchData();
  }, [setcurrentLocation]);

  return (
    <div className="w-full">
      <Head>
        <title>Antarvasna Hindi sex stories - Free Sex kahani</title>
        <meta
          name="description"
          content="New best Hindi Sex Stories for free, Indian sexy stories daily of hot girls, bhabhi and aunties. फ्री सेक्स कहानी पर असली अन्तर्वासना स्टोरी का मजा लें."
        />
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

      <main className="flex" id='main'>
        <div className="w-full">
          <div className='mx-auto items-center justify-center shadow-md rounded-lg md:px-24 py-3 '>

            <h1 className="text-center font-light text-sb font-hindi text-[22px] md:text-[30px] " itemProp="headline">
              <Link href="/" rel="home">Free Hindi Sex Stories</Link>
            </h1>

            <p className="text-center " itemProp="description">अन्तर्वासना की हॉट हिंदी सेक्स कहानियाँ</p>
          </div>


            <Stories stories={finalDataArray} />

          <Pagination data={{ url: '', currentPage: currentPage, lastPage: pagination_nav_pages[1] }} />
        </div>
      </main>

      <footer>
        <a href="https://www.fuckvideo.live/" className="hidden">External Link</a>
        <a href="https://www.chutlunds.com/" className="hidden">External Link</a>
        <a href="https://www.hindisexstory.app/" className="hidden">External Link</a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const data = { page: "1" };
  const rawResponse = await fetch(`${process.env.BACKEND_URL}HomepageStories`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const resData = await rawResponse.json();

  console.log(resData);


  return {
    props: {
      finalDataArray: resData.data.finalDataArray,
      pagination_nav_pages: resData.data.pagination_nav_pages,
      currentPage: 1,
    },
  };
}
