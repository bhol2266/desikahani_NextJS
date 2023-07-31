import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import PicsThumbnail from "../../components/PicsThumbnail";
import { BeatLoader } from "react-spinners";
import MultiformatAds from "../../components/Ads/MultiFormatAds";
import Outstreams from "../../components/Ads/Outstream";
import SinglePicThumnail from "../../components/SinglePicThumnail";

function Album({ dload_links, relatedAlbums, href }) {
  const [showBigImage, setshowBigImage] = useState(false);
  const [BigImageURL, setBigImageURL] = useState("");

  const router = useRouter();
  if (router.isFallback) {
    return (
      <div className="flex justify-center mx-auto mt-10 ">
        <BeatLoader loading size={25} color={"orange"} />
      </div>
    );
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const { photoAlbum } = router.query;
  var title;
  if (photoAlbum) {
    try {
      title = photoAlbum.trim().replaceAll("-", " ");
    } catch (error) { }
  }

  const displaypics = dload_links.map((picURL, index) => {

    let indexx= index+1;
    const digitalOceanUrl = "https://bucket2266.blr1.cdn.digitaloceanspaces.com/" + "FirebaseFolders/" + href + "/" + indexx + ".png";
    return (
      <SinglePicThumnail key={picURL} picData={digitalOceanUrl} index={index} href={href}
      />
    );
  });

  const relatedPics = relatedAlbums.map((picData) => {
    const digitalOceanUrl = "https://bucket2266.blr1.cdn.digitaloceanspaces.com/" + "FirebaseFolders/" + picData.fullalbum_href + "/thumbnail.png";
    picData['thumbnail'] = digitalOceanUrl;
    return <PicsThumbnail key={picData._id} data={picData} />;
  });

  return (
    <div className=" ">
      <Head>
        <title>{photoAlbum.replace(/-/g, " ")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <meta
          name="description"
          content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />

        <meta property="og:title" content={photoAlbum.replace(/-/g, " ")} />
        <meta
          property="og:description"
          content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka."
        />
        <meta
          property="og:url"
          content={`https://www.desikahaniya.in/photo/${photoAlbum}`}
        />
        <meta property="og:site_name" content="Free Hindi Sex Stories" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={photoAlbum.replace(/-/g, " ")} />
        <meta
          name="twitter:description"
          content="Yaha par aap enjoy kar sakte ho Indian girls ki nude aur sex photos alag alag category mein. Hot Girl ke nude selfies ya phir chudai ka xxx photos wives ka."
        />
        <meta name="twitter:label1" content="पोस्ट" />
        <meta name="twitter:data1" content="85" />
      </Head>

      <MultiformatAds />

      <div className="flex flex-col">
        <h1
          className={` font-semibold text-md sm:text-lg md:text-2xl text-center p-1 mx-4 font-inter`}
        >
          {title}
        </h1>

        <div
          className={`${!showBigImage ? "" : "hidden"
            } grid grid-cols-2  gap-2 md:gap-3 lg:gap-4  md:grid-cols-3 `}
        >
          {displaypics}
        </div>
        <div
          onClick={() => {
            setshowBigImage(false);
          }}
          className={`${showBigImage ? "" : "hidden"}`}
        >
          <img
            className={`object-contain h-4/5 mx-auto`}
            loading="lazy"
            alt={"loading"}
            src={BigImageURL}
          ></img>
        </div>

        <div className={`${!showBigImage ? "" : "hidden"}`}>
          <h2 className="m-1 text-xl shadow-lg bg-red-500 text-white font-poppins text-center mt-6 rounded">
            Related Photos
          </h2>
          <div
            className={` grid grid-cols-2 p-1 sm:grid-cols-1 gap-x-1  md:grid-cols-3 lg:grid-cols-4 space-x-2 space-y-4`}
          >
            {relatedPics}
          </div>
        </div>
      </div>

      <MultiformatAds />

      <Outstreams />
    </div>
  );
}

export default Album;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { photoAlbum: "chudasi-nri-biwi-ki-nude-aur-sex-photos" } },
    ],
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const { photoAlbum } = context.params;
  const data = { photoAlbum: photoAlbum };
  const rawResponse = await fetch(`${process.env.BACKEND_URL}fullalbum`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const resData = await rawResponse.json();

  // sortImageList
  const sortedImageArray = resData.dataobject.imageArray;
  sortedImageArray.sort((a, b) => a.localeCompare(b));

  return {
    props: {
      dload_links: sortedImageArray,
      relatedAlbums: resData.finalDataArray,
      href: photoAlbum,
    },
  };
}
