import BannerAds from './Ads/BannerAds';
import Outstream from './Ads/Outstream';
import StoryThumbnail from "./StoryThumbnail";
import { BannedKeywords } from '../JsonData/BannedKeywords';

function Stories({ stories }) {

    return (
        <div className="">
            <div className='grid grid-cols-1 p-1 md:grid-cols-1 gap-2 md:gap-3 lg:gap-4'>
                {
                    stories.filter(story => {
                        // Check if the story.href contains any banned keywords
                        return !BannedKeywords.some(keyword => story.href.includes(keyword));
                    }).map(story => {
                        console.log(story.href);
                        return (
                            <StoryThumbnail key={story.Title} story_details={story} />
                        );
                    })
                }
            </div>
            <Outstream />
        </div>
    );
}

export default Stories;
