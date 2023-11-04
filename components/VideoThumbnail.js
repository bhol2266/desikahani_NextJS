import {
    EyeIcon
} from '@heroicons/react/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PopunderAds from './Ads/Popunder';
import Outstreams from './Ads/Outstream';
import BannerAds from './Ads/BannerAds';


function VideoThumbnail({ story_details }) {

    const { thumbnail } = story_details

    const router = useRouter()
    const rough = story_details.href.substring(story_details.href.indexOf('.com/') + 5, story_details.href.length - 1)
    const category = rough.substring(0, rough.indexOf('/'))
    const title = rough.substring(rough.indexOf('/') + 1, rough.length)



    const href = story_details.href.substring(story_details.href.indexOf('videos/') + 7, story_details.href.length - 1)




    return (
        <div className="lg:px-4 shadow-orange-100 shadow-2xl    rounded-lg "  >

           <PopunderAds/>
           <Outstreams/>
           <BannerAds/>

            <Link href={`/videos/${href}`}>
                <img src={thumbnail} alt="" className='w-full  aspect-video mb-2 object-contain' />

            </Link>

            <div className='px-2 lg:px-0 '>

                <h2 className=' font-medium text-[20px] font-Opensans text-orange-800 cursor-pointer  whitespace-nowrap	overflow-hidden'>{story_details.Title}</h2>

                <div className='flex items-center text-sm  my-1 space-x-2'>


                    <p className='font-semibold text-gray-600 ml-[1px]'>{story_details.date.day + "-" + story_details.date.month + "-" + story_details.date.year}</p>

                    <div className='flex items-center'>
                        <EyeIcon className='icon text-blue-500' />
                        <p className='font-semibold text-gray-600'>{story_details.views}</p>
                    </div>
                </div>

                <div className='flex flex-wrap space-x-1'>

                    {story_details.tags.map(tag => {
                        return (
                            <Link key={tag.name} href={`/videos/tag/${tag.name.toLowerCase().replace(/ /g, "-")}`}>
                                <p className='hover:text-orange-800 cursor-pointer underline  text-xs m-1 font-arial'>{tag.name}</p>
                            </Link>
                        )
                    })}

                  
                </div>

            </div>



        </div>
    )
}

export default VideoThumbnail

