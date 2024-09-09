import BannerAds from './Ads/BannerAds';
import Outstream from './Ads/Outstream';
import StoryThumbnail from "./StoryThumbnail";

function Stories({ stories }) {

    return (
        <div className="">
            <div className='grid grid-cols-1 p-1 md:grid-cols-1 gap-2 md:gap-3 lg:gap-4'>
                {
                    stories.map(story => {
                        return (
                            <StoryThumbnail key={story.Title} story_details={story} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Stories;
