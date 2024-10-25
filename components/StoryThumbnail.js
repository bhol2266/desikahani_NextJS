import {
    EyeIcon,
    PencilAltIcon
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BannerAds from './Ads/BannerAds';
import PopunderAds from './Ads/Popunder';
import { capitalizeFirstLetter } from '../utils/desikahaniUtils';

function StoryThumbnail({ story_details }) {


    const router = useRouter()

    const getRandomViews = () => {
        const randomViews = Math.floor(Math.random() * (10000 - 500 + 1)) + 1000;
        return randomViews >= 1000 ? `${(randomViews / 1000).toFixed(1)}K` : randomViews.toString();
    };

    return (
        <div className=" p-4 shadow-orange-100 shadow-2xl  my-2  rounded-lg "  >

            <PopunderAds />
            <BannerAds />

            <Link href={`/${story_details.newTitle.trim().replace(/ /g, '-')}`}>
                <h2 itemProp="headline" className='text-[24px] sm:text-[27px] font-Opensans text-orange-800 cursor-pointer hover:text-green-800  '>{capitalizeFirstLetter(story_details.newTitle)}</h2>
            </Link>
            <div className='flex items-center text-sm  my-2 space-x-2'>

                <div className='flex  items-center '>
                    <PencilAltIcon className='icon text-brown-400' />
                    <p onClick={() => { router.push(`/author/${story_details.author.href}`) }} className='cursor-pointer underline hover:text-red-500 font-semibold text-gray-600' >{story_details.author.name_english.length > 20 ? story_details.author.name : story_details.author.name_english}</p>
                </div>
                <p className='font-semibold text-gray-600'>{story_details.date.day + "-" + story_details.date.month + "-" + story_details.date.year}</p>

                <div className='flex items-center'>
                    <EyeIcon className='icon text-blue-500' />
                    <p className='font-semibold text-gray-600'>{getRandomViews()}</p>
                </div>
            </div>


            <p className='text-gray-800 text-lg font-Opensans'>{capitalizeFirstLetter(story_details.shortDescription)}</p>

            <Link href={`/${story_details.newTitle.trim().replace(/ /g, '-')}`}>
                <p className=' mb-1 font-semibold text-md font-kalam text-right text-orange-800 hover:text-green-800 cursor-pointer'>पूरी कहानी पढ़ें</p>
            </Link>


            <div className='flex flex-wrap space-x-1'>

                {story_details.tagsArray.map(tag => {
                    return (


                        <p onClick={() => { router.push(`/tag/${tag.toLowerCase().trim().replace(/ /g, '-')}`) }} className='hover:text-orange-800 cursor-pointer underline  text-xs m-1 font-arial' key={tag}>{tag}</p>
                    )
                })}


            </div>
        </div>
    )
}

export default StoryThumbnail

