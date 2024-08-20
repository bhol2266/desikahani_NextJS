import { useState, useRef, useEffect, } from 'react';
import { useContext } from 'react'
import videosContext from '../context/videos/videosContext'
import ReactCountryFlag from "react-country-flag"

import { Fragment } from 'react'

import {

} from '@heroicons/react/solid'
import {
    MoonIcon,
    MenuIcon,
    SunIcon,
    ChevronDownIcon, UserIcon

} from '@heroicons/react/outline'
import { useRouter } from 'next/router';

import { Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Link from 'next/link';

var navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Desi Girls - Video Chat', href: 'https://play.google.com/store/apps/details?id=com.bhola.livevideochat&hl=en-IN', current: false },
    { name: 'Leaked Pictures', href: '/photo', current: false },
    { name: 'Audio Sex Story', href: `/tag/audio-sex-story`, current: false },
    { name: 'Mobile App', href: "https://play.google.com/store/apps/details?id=com.bhola.desiKahaniyaAdult", current: false },
    { name: 'Sex Videos', href: "https://fuckvideo.live/", current: false },  // route "/videos"
    { name: 'अपनी कहानी भेजे', href: "/submitStory", current: false },



]

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



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Navbar() {


    const { MobileAppModalVisible, setMobileAppModalVisible } = useContext(videosContext);

    const router = useRouter();
    const context = useContext(videosContext);
    const { currentLocation, countryBlocked } = context;

    const [location, setlocation] = useState(currentLocation)


    useEffect(() => {
        if (localStorage.getItem("location") && !currentLocation) {
            setlocation(JSON.parse(localStorage.getItem("location")))
        }

    }, [])



    return (

        <div>

            <div className=" bg-orange-300 p-2  shadow-md lg:hidden">

                <Disclosure as="nav" >
                    {({ open }) => (
                        <>
                            <div className='flex  items-center justify-between'>

                                <div className='flex items-center space-x-1' >
                                    <img src='/apple-touch-icon.png' className='rounded-full h-12  ml-1.5' />
                                    <div>

                                        <Link href='/'>
                                            <p className=' align-center text-center font-footer font-semibold lg:text-2xl text-2xl pl-1 pr-1 cursor-pointer lg:text-left lg:ml-6'>Hindisexstory.app</p>
                                        </Link>
                                        <p className=' align-center text-center font-footer font-extralight text-xs cursor-pointer lg:text-left lg:ml-6'>अन्तर्वासना की हॉट हिंदी सेक्स कहानियाँ</p>
                                    </div>
                                    {location &&
                                        <div className=''>
                                            <ReactCountryFlag
                                                svg
                                                countryCode={location.countryCode}
                                                style={{
                                                    fontSize: '25px',
                                                    lineHeight: '25px',
                                                }}
                                                aria-label="United States"
                                            />
                                        </div>
                                    }

                                </div>






                                <div className='flex items-center'>




                                    <Disclosure.Button className="lg:hidden items-center justify-center   rounded-md text-black hover:text-white hover:bg-gray-700 p-2">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>



                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Disclosure.Panel className="sm:flex">
                                    <div className="px-2 pt-2 pb-3 space-y-1">
                                        {navigation.map((item) => (


                                            <a href={item.href} key={item.name}  >
                                                <Disclosure.Button
                                                    as="a"
                                                    className={classNames(
                                                        item.current ? 'bg-sb text-white' : 'text-sb font-inter hover:bg-sb hover:text-white',
                                                        'block px-3 py-2 rounded-md  font-medium text-sb'
                                                    )}
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </Disclosure.Button>
                                            </a>
                                        ))}
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    )}
                </Disclosure>





            </div>


            <div className='flex flex-col font-inter font-semibold  items-center text-gray-700  bg-orange-200 shadow-lg lg:hidden  '>

                <div className='flex items-center justify-evenly  pl-2 w-full '>
                    <Link href='/'>
                        <p className=' text-[15px] md:text-xl  text-center p-1 pr-6 hover:text-orange-800 ml-2  '>Home</p>
                    </Link>

                    <Menu as="div" className={` relative  text-left`}>
                        <div className=' w-fit'>
                            <Menu.Button className="flex items-center font-semibold  text-[15px] md:text-xl   text-center p-1 pr-6 hover:text-orange-800  ">
                                Categories
                                <ChevronDownIcon className='sm:h-6 h-5 mb-[3px] pt-1 ml-1' />
                            </Menu.Button>

                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" z-50 origin-top-right absolute left-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                                {categories.map(item => {
                                    return (
                                        <Menu.Item key={item.category_title}  >
                                            {({ active }) => (
                                                <p onClick={() => { router.push(`/category/${item.href}`) }} className='block   px-4 py-2 text-sm  hover:bg-orange-200 hover:text-orange-800 cursor-pointer bg-orange-100'
                                                >
                                                    {item.category_title}
                                                </p>
                                            )}
                                        </Menu.Item>



                                    )
                                })}



                            </Menu.Items>
                        </Transition>
                    </Menu>



                    <Link href='/tag/audio-sex-story'>
                        <p className=' text-[15px] md:text-xl   text-center p-1 pr-6 hover:text-orange-800 '>Audio Sex Story</p>
                    </Link>

                </div>


                <div className='flex items-center justify-evenly  pl-2'>

                    <a href='https://play.google.com/store/apps/details?id=com.bhola.desiKahaniyaAdult' >
                        <p className=' text-[15px] md:text-xl   text-center p-1 pr-6 hover:text-orange-800 cursor-pointer'>Mobile App</p>
                    </a>



                    <Link href='/photo'>
                        <p className=' text-[15px] md:text-xl   text-center p-1 pr-6 hover:text-orange-800 '>Leaked Pictures</p>
                    </Link>

                    <Link href='https://fuckvideo.live/'>
                        <p className=' text-[15px] md:text-xl   text-center p-1 pr-6 hover:text-orange-800 '>Sex Videos</p>
                    </Link>


                </div>



            </div>



            {/* Large Sreeen NavBar  */}



            <div className='flex-col hidden lg:flex' >


                {/* Navbar */}
                <div className='flex items-center justify-between  bg-orange-300  py-1 pt-2 '>

                    <div className='flex items-center space-x-1 md:space-x-3 ' >

                        <img src='/apple-touch-icon.png' className='rounded-full h-14  ml-3 xl:ml-4 ' />
                        <div>
                            <Link href='/'>
                                <p className=' align-center text-center font-footer font-semibold text-2xl cursor-pointer lg:text-left lg:ml-1'>Hindisexstory.app</p>
                            </Link>
                            <p className=' align-center text-center font-footer font-extralight text-sm cursor-pointer lg:text-left lg:ml-1'>अन्तर्वासना की हॉट हिंदी सेक्स कहानियाँ</p>
                        </div>
                        {location &&
                            <div className=''>
                                <ReactCountryFlag
                                    svg
                                    countryCode={location.countryCode}
                                    style={{
                                        fontSize: '25px',
                                        lineHeight: '25px',
                                    }}
                                    aria-label="United States"
                                />
                            </div>
                        }

                        <a target="_blank" href="https://play.google.com/store/apps/details?id=com.bhola.livevideochat&hl=en-IN" rel="noopener noreferrer">
                            <div className='hidden  flex  items-center 
                             cursor-pointer hover:scale-105   '>
                                <img
                                    src='/livesex.png'
                                    height={40}
                                    width={40}
                                    alt='loading'
                                ></img>
                                <p className='font-bold '>Desi Girls - Video Chat</p>
                            </div>
                        </a>
                    </div>

                    {/* 
                    <div className='flex space-x-4 items-center  '>


                        <div >
                            <button className='p-1 pl-2 pr-2 border-2 border-black  rounded-l'>
                                <SunIcon onClick={enableLightMode} className='h-8 w-8 text-white' />
                            </button>
                            <button className='p-1 pl-2 pr-2 border-2 border-black  rounded-r'>                                            <MoonIcon onClick={enableDarkMode} className='h-8 w-8' />
                            </button>
                        </div>

                    </div> */}

                </div>






                <div className='w-full bg-orange-200  items-center justify-around   flex  shadow-lg'>
                    {navigation.map(item => {

                        return (
                            <Link href={item.href} key={item.name}>

                                <p key={item.name} className='text-lg text-gray-700 font-semibold cursor-pointer p-[1px]  hover:text-orange-800'>{item.name}</p>
                            </Link>
                        )
                    })}


                </div>

            </div>


        </div>
    )
}

export default Navbar
