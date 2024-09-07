import { useRouter } from "next/router";
import Script from "next/script";
import { useEffect, useState } from 'react';


function Outstreams() {



    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();


 

    return (

        <div className="  ">
            <div id="ts_ad_video_yioip"></div>

            <Script src="//cdn.tsyndicate.com/sdk/v1/outstream.video.js" strategy="beforeInteractive" />
            <Script
                id={uniqid}
                dangerouslySetInnerHTML={{
                    __html: `  TSOutstreamVideo({
                        spot: "9281f9dd2b014c03bc02351e085c3f6a",
                        containerId: "ts_ad_video_yioip",
                        cookieExpires: "4",
                         extid: "{extid}",
                    });`,
                }}
            />


        </div>
    )
}

export default Outstreams;
