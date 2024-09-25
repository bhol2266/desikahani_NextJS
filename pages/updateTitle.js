import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Home = ({ finalDataArray }) => {

    return (
        <div className='w-full'>
            {finalDataArray.map((obj, index) => (
                <Rows key={obj.Title} title={obj.Title} newTitle={obj.newTitle} index={parseInt(index)} />
            ))}
        </div>
    );
};


const Rows = ({ title, newTitle, index }) => {
    const [input, setInput] = useState("");

    useEffect(() => {
        if (newTitle !== undefined) {
            setInput(newTitle);
        }
    }, [newTitle]); // Add newTitle to the dependency array



    const handleUpdate = async () => {
        if (input.length == 0) {
            alert("title cannot be empty")
            return
        }


        const rawResponse = await fetch(`${process.env.BACKEND_URL}updateNewStoryTitle`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ oldTitle: title, newTitle: input }),
        });

        const resData = await rawResponse.json();

        if (resData.success) {
            toast("updated");
        }




    };

    return (
        <div className="flex items-center justify-center m-2 sm:mx-4 md:mx-8 lg:mx-[50px] xl:mx-[150px]">
            <div className="flex space-x-4 w-full items-end">
                {/* Numbering on the left side */}
                <div className="flex items-center">
                    <span className="text-semiblack font-bold font-inter mb-1">{index + 1}.</span>
                </div>

                <div className="flex flex-col w-full">
                    <label className="mb-1 text-gray-700" htmlFor="old-title">Old Title</label>
                    <input
                        id="old-title"
                        type="text"
                        placeholder="Input 1"
                        className="p-2 border border-gray-300 rounded font-inter"
                        value={title}
                        readOnly
                    />
                </div>
                <div className="flex flex-col w-full">
                    <label className="mb-1 text-gray-700" htmlFor="new-title">New Title</label>
                    <input
                        id="new-title"
                        type="text"
                        placeholder="new title"
                        className="p-2 border border-gray-300 rounded font-inter"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
                <button
                    className="h-9 px-4 bg-blue-500 text-white rounded mb-1"
                    onClick={handleUpdate} // Add click handler to the button
                >
                    Update
                </button>

             

            </div>

        </div>
    );
};


export default Home;

export async function getServerSideProps() {
    const data = { page: "1" };
    const rawResponse = await fetch(`${process.env.BACKEND_URL}getStoriesForUpdatingTitle`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const resData = await rawResponse.json();

    return {
        props: {
            finalDataArray: resData.data.finalDataArray,
        },
    };
}
