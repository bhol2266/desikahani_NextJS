import Script from "next/script";


function BannerAds() {

    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var uniqid = randLetter + Date.now();
    return (
        <div className="">

    

            <Script type="text/javascript" src="//cdn.tsyndicate.com/sdk/v1/bi.js" data-ts-spot="70ab475a1b264d00ab8d62ee9cd7bb71" data-ts-width="300" data-ts-height="250" data-ts-extid="{extid}" async defer></Script>

        </div>
    )
}

export default BannerAds;
