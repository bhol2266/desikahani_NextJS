import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import Outstreams from "../../components/Ads/Outstream";
import PicsThumbnail from "../../components/PicsThumbnail";
import SinglePicThumnail from "../../components/SinglePicThumnail";
import categories_photo from '@/JsonData/photos/categories_list.json'
import Link from "next/link";
import videosContext from "../../context/videos/videosContext";
import Carousel from "../../components/Carousel";


function Album({ data }) {


  const { showCarousel, setshowCarausel, CarouselIndex, setCarouselIndex, setImageUrls } = useContext(videosContext);

  useEffect(() => {
    setImageUrls(data.imageArray)
  }, [])


  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="flex justify-center mx-auto mt-10 ">
        <BeatLoader loading size={25} color={"orange"} />
      </div>
    );
  }

  


  const { photoAlbum } = router.query;

  var title;
  if (photoAlbum) {
    try {
      title = photoAlbum.trim().replaceAll("-", " ");
    } catch (error) { }
  }



  const relatedPics = data.relatedAlbums.map((picData) => {
    return <PicsThumbnail key={picData.title} data={picData} />;
  });

  return (
    <div className=" ">
      <Head>
        <title>{photoAlbum.replace(/-/g, " ")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
        <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta property="og:title" content={photoAlbum.replace(/-/g, " ")} />
        <meta property="og:description" content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
        <meta property="og:url" content={`https://www.HindiSexstory.app/photo/${photoAlbum}`} />
        <meta property="og:site_name" content="Free Hindi Sex Stories" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={photoAlbum.replace(/-/g, " ")} />
        <meta name="twitter:description" content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka." />
        <meta name="twitter:label1" content="पोस्ट" />
        <meta name="twitter:data1" content="85" />
      </Head>


      <div className="flex flex-col">
        <h1 className={` font-semibold text-md sm:text-lg md:text-2xl text-center p-1 mx-4 font-inter`} >
          {title}
        </h1>

        <div className="flex flex-wrap justify-center">

          {data.imageArray.map((img, index) => (
            <SinglePicThumnail key={img} picURL={img} index={index} />
          ))}

        </div>


        <div >
          <h2 className="m-1 text-xl shadow-lg bg-red-500 text-white font-poppins text-center mt-6 rounded">
            Related Photos
          </h2>
          <div className={` grid grid-cols-2 p-1 sm:grid-cols-1 gap-x-1  md:grid-cols-3 lg:grid-cols-4 space-x-2 space-y-4`}>
            {relatedPics}
          </div>
        </div>
      </div>

      <p className=" text-center mx-auto text-[18px] border-gray-400 rounded-md text-black font-semibold  p-1 pl-4 pr-2 cursor-pointer bg-white opacity-75 mt-[30px]">
        Photo Categories
      </p>

      <div className="md:hidden   mx-[16px] mt-4">
        {categories_photo.map(category => (
          <Link key={category.href} href={`/photo/category/${category.href}`}>
            <p className=" font-inter text-left my-2 py-1.5 px-8  text-sm hover:bg-orange-200 rounded-md text-semiblack  cursor-pointer underline">
              {category.category_title}
            </p>
          </Link>
        ))}
      </div>

      <Carousel />
      <Outstreams />
    </div>
  );
}

export default Album;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { photoAlbum: "mumbai-ki-hot-figure-bhabhi-ke-hotel-chudai-photos" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { photoAlbum } = context.params;

  const data = { href: photoAlbum };

  const rawResponse = await fetch(`https://my-worker.ukdevelopers007.workers.dev/desikahaniya/fullalbum`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await rawResponse.json();

  if (!resData.success) {
    // Handle error, for example by returning a 404 page
    return {
      notFound: true,
    };
  }


  return {
    props: {
      data: resData.data,
    },
  };
}

