import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { Fragment } from 'react'
import { IoFilter } from "react-icons/io5";
import { useState } from 'react';
import { useContext } from 'react'
import videosContext from '../context/videos/videosContext'
import { useRouter } from 'next/navigation';


export default function VideoFilterButton() {


    const { FilteredVideos, setFilteredVideos } = useContext(videosContext);

    const router = useRouter();


    const [sortOption, setSortOption] = useState('By publication date');
    const [sortFilter, setsortFilter] = useState('by_publication_date');


    const [durationOption, setDurationOption] = useState('Not selected');
    const [durationFilter, setdurationFilter] = useState('all');


    function routerFunction(filter, type) {



        if (type == "sort") {
            console.log({ sort: filter, duration: durationFilter, page: '1' });
            router.push({ pathname: '/videos/filter', query: { sort: filter, duration: durationFilter, page: '1' } });
        } else {

            console.log({ sort: sortFilter, duration: filter, page: '1' });
            router.push({ pathname: '/videos/filter', query: { sort: sortFilter, duration: filter, page: '1' } });
        }


    }




    const handleChange = (event, type) => {
        const { value } = event.target;
        if (type === 'sort') {
            if (value !== sortOption) {
                setSortOption(value);

                switch (value) {
                    case "By duration":
                        setsortFilter('by_duration')
                        routerFunction('by_duration', 'sort')

                        break;
                    case "By popularity":
                        setsortFilter('by_popularity')
                        routerFunction('by_popularity', 'sort')

                        break;
                    case "By rating":
                        setsortFilter('by_rating')
                        routerFunction('by_rating', 'sort')

                        break;
                    default:
                        setsortFilter('by_publication_date')
                        routerFunction('by_publication_date', 'sort')

                        break;
                }

            }
        } else if (type === 'duration') {
            if (value !== durationOption) {
                setDurationOption(value);

                switch (value) {
                    case "Less than 10 minutes":
                        setdurationFilter('lessthan_10')
                        routerFunction('lessthan_10', 'duration')

                        break;
                    case "10 - 40 minutes":
                        setdurationFilter('10_to_40')
                        routerFunction('10_to_40', 'duration')

                        break;
                    case "More than 40 minutes":
                        setdurationFilter('morethan_40')
                        routerFunction('morethan_40', 'duration')
                        break;
                    default:
                        setdurationFilter('all')
                        routerFunction('all', 'duration')

                        break;
                }

            }
        }
    };

    return (
        <div className="relative p-4 w-fit ml-auto">
            <Popover as={Fragment}>
                {({ open }) => (
                    <>
                        <Popover.Button className="rounded bg-orange-800 p-2 w-fit">
                            <IoFilter className='text-white w-[20px] h-[20px]' />
                        </Popover.Button>

                        <Popover.Panel className="absolute right-4 -top-[200px] z-10 mt-2 w-[250px] bg-white border border-gray-200 rounded-lg shadow-lg">
                            <div className="p-6">
                                <div className="mb-4">
                                    <label htmlFor="sort" className="text-md lg:text-lg font-inter text-orange-800">
                                        Sort
                                    </label>
                                    <select
                                        id="sort"
                                        value={sortOption}
                                        onChange={(e) => handleChange(e, 'sort')}
                                        className="mt-1 w-full px-2 py-1.5 border border-gray-200 text-gray-600 shadow-sm text-sm focus:outline-none focus:ring-0 focus:ring-gray-200"
                                    >
                                        <option>By publication date</option>
                                        <option>By duration</option>
                                        <option>By popularity</option>
                                        <option>By rating</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="duration" className="text-md lg:text-lg font-inter text-orange-800">
                                        Duration
                                    </label>
                                    <select
                                        id="duration"
                                        value={durationOption}
                                        onChange={(e) => handleChange(e, 'duration')}
                                        className="mt-1 w-full px-2 py-1.5 border border-gray-200 text-gray-600 shadow-sm text-sm focus:outline-none focus:ring-0 focus:ring-gray-200"
                                    >
                                        <option>Less than 10 minutes</option>
                                        <option>10 - 40 minutes</option>
                                        <option>More than 40 minutes</option>
                                        <option>Not selected</option>
                                    </select>
                                </div>
                            </div>
                        </Popover.Panel>
                    </>
                )}
            </Popover>
        </div>
    );
}
