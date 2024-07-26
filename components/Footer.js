import Link from 'next/link';
import { useRouter } from 'next/router';

import { useContext, useEffect } from 'react';
import videosContext from '../context/videos/videosContext'


function Footer() {

    //Use Context
    const context = useContext(videosContext);
    const { spinnerLoading } = context;

    return (

        <div className={`font-footer mx-auto bg-orange-300  ${spinnerLoading ? "hidden" : ""}`}>

            <Link href='/submitStory'>
                <p className='w-fit mx-auto  md:text-xl   text-center p-1 pr-6 hover:scale-105  transition-all lg:hidden text-[20px] pt-3'>अपनी कहानी भेजे</p>
            </Link>

            < div className=" w-4/5 mx-auto p-1 mt-1 flex items-center justify-between ">
                <div className=" flex flex-wrap justify-between min-w-full">


                </div>

            </div>

            <div className='flex p-2 items-center justify-between  w-4/5 mx-auto'>
                
                <p className='font-semibold'>© 2022 Hindisexstory.app is a Hindi Sex Stories Website</p>

                <div className='p-2  rounded'>

                    {/* <img
                        src='./rta.png'
                        height={80}
                        width={80}
                        layout='fixed'
                        alt='fdsg'
                    ></img> */}
                </div>
            </div>
        </div>

    )

}

export default Footer
