import React from 'react';

const imageUrls = [
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-1.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-3.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/bade-boobs-1.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-4.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-5.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/nude-mumme.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/big-indian-boobs-1.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-4.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-5.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/nude-mumme.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/big-indian-boobs-1.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/big-indian-boobs-1.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-4.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-5.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/nude-mumme.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2024/09/pakistani-callgirl-aunty-xxx-fucking-photos-7.jpg",
    "https://www.antarvasnaphotos2.com/wp-content/uploads/2018/04/big-indian-boobs-1.jpg",
];

const Rough = () => {
    return (

        <div>

            <div
                className={`absolute z-30 flex left-1/2 -translate-x-1/2 bottom-5 px-1 space-x-2 transition-opacity duration-300 w-full opacity-100 `}
            >
                <div className='flex space-x-1 items-center mx-auto overflow-x-auto scrollbar-hide px-4'>
                    {imageUrls.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            className={`h-16 w-12 object-cover rounded-lg cursor-pointer transition-transform duration-300 '}`}
                            alt={`Thumbnail ${index + 1}`}
                            onClick={() => handleIndicatorClick(index)}
                            aria-label={`Thumbnail ${index + 1}`}
                        />
                    ))}
                </div>
            </div>





        </div>
    );
}

export default Rough;
