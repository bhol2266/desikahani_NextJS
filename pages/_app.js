import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
import Footer from '../components/Footer'
import { ModalFeedbackForm } from '../components/ModalFeedbackForm'
import Navbar from '../components/Navbar'
import VideoState from '../context/videos/VideoState'
import '../styles/globals.css'
import '../styles/nProgress.css'
import { useEffect } from 'react'
import VideoFilterButton from '../components/VideoFilterButton'
import { subscribeToTopic } from '../firebase'
import Outstreams from '../components/Ads/Outstream'
import BannerAds from '../components/Ads/BannerAds'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const currentRoute = router.pathname;

  Router.events.on("routeChangeStart", (url) => {
    console.log('routeChangeStart');
    NProgress.start();

  })
  Router.events.on("routeChangeComplete", (url) => {
    console.log('routeChangeComplete');
    NProgress.done();
  })



  useEffect(() => {
    subscribeToTopic() //firebase push notification 

  }, [])


  return (
    <>

      <Head>
        <meta name='asg_verification' content='vVcWCcbbgmnqv221hpAjPojb' />
        <meta name="Trafficstars" content="48726" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="UTF-8" />
        <meta property="og:locale" content="hi_IN" />

        <meta name="6a97888e-site-verification" content="2c270e52114fa1f1ec9574ed3f642a9c" />

      </Head>


      <VideoState>

        <Navbar />
        <div className='bg-orange-50'>

          <div className=' 4xl:w-[85%] 3xl:w-[95%] flex mx-auto justify-center pt-1 md:pt-3  px-1   '>
            {/* <Sidebar /> */}
            <Component {...pageProps} />
          </div>
        </div>
        <hr />
        {currentRoute.includes("/videos") &&
          <div className=' sticky bottom-0 right-0'>
            <VideoFilterButton />
          </div>

        }

        <ModalFeedbackForm />
        <ToastContainer />


        <div className='flex items-center justify-center sm:w-1/2 lg:w-1/4 mx-auto mt-4'>
          <Outstreams />
          <Outstreams />
          <Outstreams />
        </div>
        <Footer />

      </VideoState>
    </>
  )
}

export default MyApp
